import './product.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useApp } from '../../context/AppContext';
import { getProductById, formatFormula, getProductImage, parseNom} from '../../services/dataService.js'
import {getMoleculeFamily} from '../../utils/getMoleculeFamily.jsx'

import { WarnIcon } from '../../assets/icons/warn_icon'

import { useState,lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'

const Specification = lazy(() => import('./components/specification.jsx'))
const SafetyHazards = lazy(() => import('./components/safety_hazards'))
const ShippingDocs = lazy(() => import('./components/shipping_docs'))

const TABS_CONFIG = [
    { id: "Specifications", label: "Specifications", component: Specification },
    { id: "Safety & hazards", label: "Safety & hazards", component: SafetyHazards },
    { id: "Shipping & docs", label: "Shipping & docs", component: ShippingDocs }
];

function Product() {
    
    const navigate = useNavigate();
    const [quantitySelected, setQuantitySelected] = useState();
    const [detailsSelected, setDetailsSelected] = useState("Specifications")

    const { products, loading } = useApp()
    const { id } = useParams()
    
    
    if (loading) return <p>Chargement...</p>
    // on récupère les info sur le produit correspondant
    const prod = getProductById(products, id)
    
    // si le produit ne peux pas être charger --> error 404 not found
    if (!prod) return navigate('/error404')
        
    // préparation des informations à afficher
    const formula = formatFormula(prod["Formule brute"])
    const imgSrc = getProductImage(id)
    const { name, purity, method } = parseNom(prod["Nom"])
    const quantity = (prod["Conditionnement"]?.split("\n").map(el => el.trim()) ?? []).concat("Other");
    const fullPuity = method ? `${purity} (${method})` : purity;

    const currentQuantitySelected = quantitySelected || quantity[0];
    const ActiveComponent = TABS_CONFIG.find(tab => tab.id === detailsSelected)?.component;

    const specsList = [
        { label:"CAS", data:prod["CAS"] || "N/A" },
        { label:"MFCD", data:prod["Code ACD"] || "N/A" },
        { label:"EPSILON CODE", data:id || "N/A" },
        { label:"MOLECULAR FORMULA", data:formula || "N/A" },
        { label:"PURITY", data:fullPuity || "N/A" },
        { label:"APPEARANCE", data:prod["Appearance"] || "N/A" },
        { label:"STORAGE", data:prod["Storage"] || "N/A" }
    ]

    return (
    <>
        <Helmet>
            <title>{name} — EC-{id} | Epsilon Chimie</title>
            <meta name="description" content={`${name}. CAS ${prod["CAS"]}. ${fullPuity} purity. Available from Epsilon Chimie, French phosphorus chemicals manufacturer.`} />
        </Helmet>
        <section id="product-details">
            <article>
                <img src={imgSrc} alt={name} />
                <div>
                    <div>
                        <div className="number">FORMULA</div>
                        <p dangerouslySetInnerHTML={{ __html: formula }} />
                    </div>

                    <div>
                        <div className="number">MW</div>
                        <p>{prod["Masse molaire"]} <span>g/mol</span></p>
                    </div>
                </div>
                <div>
                    <span>Labeled with your internal reference</span>
                    <p>For easier organization, each bottle can be labeled with your internal reference for seamless integration in your workflow, easy tracking and usage.</p>
                </div>
            </article>

            <article>
                <div>
                    <div className="section-label"><div className='losange'></div>{prod["Réf EPSILON"]} - {getMoleculeFamily(prod)}</div>
                    <h1>{name}</h1>
                </div>

                <div className='information'>
                    <WarnIcon aria-hidden="true"/>
                    <div>
                        <h2>GHS hazards</h2>
                        <p>Health hazard. Consult the full SDS before handling.</p>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="number">AVAILABLE QUANTITIES</div>
                        <div>
                            {
                                quantity.map((element) => (
                                    <button
                                        key={element}
                                        className={currentQuantitySelected === element ? "active" : ""}
                                        onClick={() => setQuantitySelected(element)}
                                        aria-current={currentQuantitySelected === element ? "true" : undefined}

                                    >
                                        {element}
                                    </button>
                                ))
                            }
                        </div>
                        <p>Larger quantities ? We produce up to multi kilograms batches on demand.</p>
                    </div>
                    <div>
                        <button onClick={() => navigate(`/request-for-quote/${id}?quantity=${currentQuantitySelected}`)}>Request quote for {currentQuantitySelected}</button>
                        <p>SDS and TDS available on request</p>
                    </div>
                </div>
                
                <div>
                    <nav aria-label="Product details tabs">
                        {TABS_CONFIG.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setDetailsSelected(tab.id)}
                                className={detailsSelected === tab.id ? "active" : ""}
                                aria-current={detailsSelected === tab.id ? "true" : undefined}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                    {ActiveComponent && (
                        <Suspense fallback={<p>Loading...</p>}>
                            <ActiveComponent specsList={specsList} />
                        </Suspense>
                    )}
                    
                </div>
            </article>
        </section>
    </>
    )
}

export default Product
