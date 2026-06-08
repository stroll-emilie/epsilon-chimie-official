import './product.css'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { useProducts } from '../../context/AppContext';
import { getProductById, formatFormula, getProductImage, parseNom} from '../../services/dataService.js'
import {getMoleculeFamily} from '../../utils/getMoleculeFamily.jsx'

import { WarnIcon } from '../../assets/icons/warn_icon'

import Specification from './components/specification.jsx'
import SafetyHazards from './components/safety_hazards'
import ShippingDocs from './components/shipping_docs'

const TABS_CONFIG = [
    { id: "Specifications", label: "Specifications", component: Specification },
    { id: "Safety & hazards", label: "Safety & hazards", component: SafetyHazards },
    { id: "Shipping & docs", label: "Shipping & docs", component: ShippingDocs }
];

function Product() {
    
    const navigate = useNavigate();
    const [packingSelected, setPackingSelected] = useState();
    const [detailsSelected, setDetailsSelected] = useState("Specifications")

    const { products, loading } = useProducts()
    const { id } = useParams()
    
    
    if (loading) return <p>Chargement...</p>
    // on récupère les info sur le produit correspondant
    const prod = getProductById(products, id)
    
    // si le produit ne peux pas être charger --> error 404 not found
    if (!prod) navigate('/error404')
        
    // préparation des informations à afficher
    const formula = formatFormula(prod["Formule brute"])
    const imgSrc = getProductImage(id)
    const { name, purity, method } = parseNom(prod["Nom"])
    const packing = prod["Conditionnement"]?.split("\n").map(el => el.trim()) ?? [];
    const fullPuity = method ? `${purity} (${method})` : purity;

    const currentPackingSelected = packingSelected || packing[0];
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
        <section id="product-details">
            <article>
                <img src={imgSrc} alt="" />
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
                    <legend><div className='losange'></div>{prod["Réf EPSILON"]} - {getMoleculeFamily(prod)}</legend>
                    <h2>{name}</h2>
                </div>

                <div className='information'>
                    <WarnIcon/>
                    <div>
                        <h3>GHS hazards</h3>
                        <p>Health hazard. Consult the full SDS before handling.</p>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="number">AVAILABLE PACKINGS</div>
                        <div>
                            {
                                packing.map((element, index) => (
                                    <button
                                        key={index}
                                        className={currentPackingSelected === element ? "active" : ""}
                                        onClick={() => setPackingSelected(element)}
                                    >
                                        {element}
                                    </button>
                                ))
                            }
                        </div>
                        <p>Larger quantities ? Wa produce up to multi kilograms batches on demand.</p>
                    </div>
                    <div>
                        <button onClick={() => navigate(`/request-for-quote/${id}?packing=${currentPackingSelected}`)}>Request quote for {currentPackingSelected}</button>
                        <p>SDS and TDS available on request</p>
                    </div>
                </div>
                
                <div>
                    <nav>
                        {TABS_CONFIG.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setDetailsSelected(tab.id)}
                                className={detailsSelected === tab.id ? "active" : ""}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                    {ActiveComponent && <ActiveComponent specsList={specsList} />}
                    
                </div>

            </article>
        </section>

        <section></section>
    </>
    )
}

export default Product
