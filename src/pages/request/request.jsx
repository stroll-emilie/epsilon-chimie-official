import './request.css'

import { CircleArrowIcon } from '../../assets/icons/circle_arrow_icon'
import { InfoCircleVideIcon } from '../../assets/icons/info_circle_vide_icon'

import Company from './components/company'
import Compound from './components/compound'
import Contact from './components/contact'


import { useEffect, useMemo, useState } from 'react'
import { getProductById, parseNom} from '../../services/dataService.js'
import { useProducts } from '../../context/AppContext';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'

function Request() {
    
    
    const navigate = useNavigate();
    const { products, loading } = useProducts()
    const { id } = useParams()
    const prod = useMemo(() => id ? getProductById(products, id) : null, [products, id]);


    const [formStep, setFormStep] = useState(0)



    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const packing = searchParams.get('packing');
    
    const { name, purity, method } = prod ? parseNom(prod["Nom"]) : {}
    
    const [formData, setFormData] = useState({
        requestType: id ? "catalogue" : "custom", compoundName: name || "", quantity: "", purity: "", packing: packing || "", required: "default", application: "",
        company: "", sector: "", contry: "", website: "", additional: "", 
        firstName: "", lastName: "", role: "", email: "", tel: ""
    });
    
    useEffect(() => {
        if(!loading && id && !prod){
            navigate('/error404');
        }
    }, [loading, id, prod]);
    
    
    const updateData = (newFields) => setFormData((prev) => ({...prev, ...newFields}));
    const next = () => setFormStep((s) => s + 1);
    const prev = () => setFormStep((s) => s - 1);
    const handleSubmit = () => console.log("Données finales :", formData);

    return (
    <>
        <section id='request-title'>
            <div className='path'><Link to="/">HOME</Link> / <span>REQUEST FOR QUOTE</span></div>
            <div>
                <h2>Request for quote</h2>
                <p>We reply to every request within 48 working hours. All information stays confidential.</p>
            </div>
        </section>

        <section id="request">
            <article className="form-container">
                <div>
                    <div className={`form-point ${formStep === 0 ? "active" : ""}`}>
                        <span>1</span>
                        <p>COMPOUND</p>
                    </div>
                    <hr />
                    <div className={`form-point ${formStep === 1 ? "active" : ""}`}>
                        <span>2</span>
                        <p>COMPANY</p>
                    </div>
                    <hr />
                    <div className={`form-point ${formStep === 2 ? "active" : ""}`}>
                        <span>3</span>
                        <p>CONTACT</p>
                    </div>
                </div>
        
                <form id='form-compound'>
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
                            <button type="button" onClick={prev}><CircleArrowIcon/> Back</button>
                        )}
                        {formStep === 0 && <span />}

                        {formStep <2 && (
                            <button type="button" onClick={next}> Next</button>
                        )}
                        {formStep >=2 && (
                            <button type="button" onClick={handleSubmit}>Submit</button>
                        )}
                    </nav>
                </form>


            </article>
        </section>
    </>
    )
}

export default Request
