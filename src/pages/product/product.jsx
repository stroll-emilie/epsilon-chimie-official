import { WarnIcon } from '../../assets/icons/warn_icon'
import './product.css'
import { Link } from 'react-router-dom'

import Vide from '../../assets/images/mollecules/vide.png'

import Specification from './components/specification.jsx'
import SafetyHazards from './components/safety_hazards'
import ShippingDocs from './components/shipping_docs'
import { useState } from 'react'

function Product() {
    
    
    const [quantity,setquantity] = useState()
    return (
    <>
        <section id="product-details">
            <article>
                <img src={Vide} alt="" />
                <div>
                    <div>
                        <div className="number">FORMULA</div>
                        <p>CH<sub>6</sub>NO<sub>3</sub>P</p>
                    </div>

                    <div>
                        <div className="number">MW</div>
                        <p>111.04 <span>g/mol</span></p>
                    </div>
                </div>
            </article>

            <article>
                <div>
                    <legend><div className='losange'></div>RÉFÉRENCE EPSILON - FAMILLE DE MOLÉCULE</legend>
                    <h2>Nom de la molécule</h2>
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
                    <ShippingDocs/>
                </div>

            </article>
        </section>

        <section></section>
    </>
    )
}

export default Product
