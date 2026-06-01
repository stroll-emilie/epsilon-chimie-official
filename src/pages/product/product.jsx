import './product.css'
import { useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { useProducts } from '../../context/AppContext';
import { getProductById, formatFormula, getProductImage, parseNom} from '../../services/dataService.js'
import {getMoleculeFamily} from '../../utils/getMoleculeFamily.jsx'

import Vide from '../../assets/images/mollecules/vide.png'
import { WarnIcon } from '../../assets/icons/warn_icon'

import Specification from './components/specification.jsx'
import SafetyHazards from './components/safety_hazards'
import ShippingDocs from './components/shipping_docs'

function Product() {
    
    const navigate = useNavigate();

    const { products, loading } = useProducts()
    const { id } = useParams()

    if (loading) return <p>Chargement...</p>

    const prod = getProductById(products, id)

    if (!prod) navigate('/error404')

    const formula = formatFormula(prod["Formule brute"])
    const imgSrc = getProductImage(id)
    const { name, purity } = parseNom(prod["Nom"])

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
                            <button>1 g</button>
                            <button>5 g</button>
                            <button>25 g</button>
                            <button>100 g</button>
                        </div>
                        <p>Larger quantities ? Wa produce up to multi kilograms batches on demand.</p>
                    </div>
                    <div>
                        <Link>Request quote for 1g</Link>
                        <p>SDS and TDS available on request</p>
                    </div>
                </div>
                
                <div>
                    <nav>
                        <button>Specifications</button>
                        <button>Safety & hazards</button>
                        <button>Shipping & docs</button>
                    </nav>
                    <Specification/>
                </div>

            </article>
        </section>

        <section></section>
    </>
    )
}

export default Product
