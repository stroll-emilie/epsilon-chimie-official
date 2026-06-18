import './request.css'
import emailjs from '@emailjs/browser'

import { CircleArrowIcon } from '../../assets/icons/circle_arrow_icon'

import Company from './components/company'
import Compound from './components/compound'
import Contact from './components/contact'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { getProductById, parseNom, getDefaultPurity} from '../../services/dataService.js'
import { useApp } from '../../context/AppContext';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { EMAILJS_CONFIG } from '../../config/emailjs.js'

// Champs obligatoire pour passer à l'étape suivante 
const REQUIRED_FIELDS = {
    0: ["compoundName", "quantity", "purity"],
    1: ["country", "privacyPolicy"],
    2: ["firstName", "lastName", "email"],
};

function Request() {
    const navigate = useNavigate();
    const { products, loading } = useApp()
    const { id } = useParams()
    const prod = useMemo(() => id ? getProductById(products, id) : null, [products, id]);
    
    const [formStep, setFormStep] = useState(0)
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();

    const quantity = useMemo(
        () => new URLSearchParams(location.search).get('quantity'),
        [location.search]
    );
    
    // donnée du formulaire préremplie / vide
    const [formData, setFormData] = useState({
        requestType: id ? "catalogue" : "custom", compoundName: "", quantity: quantity || "", purity: "", packing: "", required: "default", application: "",
        company: "", sector: "", country: "", website: "", additional: "", privacyPolicy: "",
        firstName: "", lastName: "", role: "", email: "", tel: ""
    });

    // si le produit dans l'url est inexistant --> error 404
    useEffect(() => {
        if (!loading && id && !prod) {
            navigate('/error404');
        }
    }, [loading, id, prod, navigate]);

    // préremplie la pureté dans le formulaire (en passant par la fonction prévu pour)
    useEffect(() => {
        if (!prod) return;
        const { name, purity } = parseNom(prod["Nom"]);
        setFormData((prev) => ({
            ...prev,
            compoundName: name || "",
            purity: getDefaultPurity(purity),
        }));
    }, [prod]);
    
    // bouton next/back
    const updateData = useCallback(
        (newFields) => setFormData((prev) => ({...prev, ...newFields})),
        []
    );
    const next = useCallback(() => setFormStep((s) => s + 1), []);
    const prev = useCallback(() => setFormStep((s) => s - 1), []);

    // vérifie que les champs required sont bien remplie
    const isStepValid = REQUIRED_FIELDS[formStep].every((field) => {
        const value = formData[field];
        if(typeof value === "boolean") return value === true;
        const normalized = value?.toString().trim();
        return normalized !== "" && normalized !== "default" && normalized !== "Other";
    });

    // envoie des mail suite à soumission du formulaire
    const handleSubmit = async () => {
        // protection pour éviter le double envoie
        if (isSubmitting) return;
        setIsSubmitting(true);
        setError(null);
        try{
            await emailjs.send(
                EMAILJS_CONFIG.serviceId, 
                EMAILJS_CONFIG.templateId, 
                formData
            );
            
            await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.replyTemplateId,
                formData
            );
            navigate('/success', { state: { fromForm: true } });
        } catch (error) {
            if (error instanceof TypeError && error.message === 'Failed to fetch') {
                setError("Connexion impossible, vérifiez votre réseau.");
            } else {
                navigate('/error', { state: { fromForm: true } });
                setError("Une erreur est survenue, réessayez ultérieurement.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };



    return (
    <>
        <section id='request-title'>
            <div className='path'><Link to="/">HOME</Link> / <span>REQUEST FOR QUOTE</span></div>
            <div>
                <h1>Request for quote</h1>
                <p>We reply to every request within 48 working hours. All information stays confidential.</p>
            </div>
        </section>

        <section id="request">
            <article className="form-container">
                <div>
                    <div className={`form-point ${formStep === 0 ? "active" : ""}`} aria-current={formStep === 0}>
                        <span>1</span> <p>COMPOUND</p>
                    </div>
                    <hr />
                    <div className={`form-point ${formStep === 1 ? "active" : ""}`} aria-current={formStep === 1}>
                        <span>2</span> <p>COMPANY</p>
                    </div>
                    <hr />
                    <div className={`form-point ${formStep === 2 ? "active" : ""}`} aria-current={formStep === 2}>
                        <span>3</span> <p>CONTACT</p>
                    </div>
                </div>

                <form id='form-compound' onSubmit={(e) => e.preventDefault()}>
                    {formStep === 0 && (
                        <Compound data={formData} onChange={updateData}/>
                    )}
                    {formStep === 1 && (
                        <Company data={formData} onChange={updateData}/>
                    )}
                    {formStep === 2 && (
                        <Contact data={formData} onChange={updateData}/>
                    )}

                    <hr />
                    
                    <nav>
                        {formStep >0 && (
                            <button type="button" onClick={prev}><CircleArrowIcon aria-hidden="true" /> Back</button>
                        )}
                        {formStep === 0 && <span />}

                        {formStep <2 && (
                            <button type="button" onClick={next} disabled={!isStepValid} aria-disabled={!isStepValid}> Next</button>
                        )}
                        {formStep >=2 && (
                            <button type="button" onClick={handleSubmit} aria-disabled={!isStepValid || isSubmitting} disabled={!isStepValid || isSubmitting}>{isSubmitting ? "Sending..." : "Submit"}</button>
                        )}
                    </nav>
                </form>


            </article>
        </section>
    </>
    )
}

export default Request
