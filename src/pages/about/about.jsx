import './about.css'
import Batiment from '../../assets/images/batiment4.jpg'

import { Link } from 'react-router-dom'

function About() {
    return (
    <>
        <section id="aboutLab">
            <div>
                <article>
                    <div className='path'><Link to="/">HOME</Link> / <span>ABOUT</span></div>
                    <div className="section-label"><div className='losange'></div>about the laboratory</div>
                    <h1>A French laboratory serving worldwide industry since 1995.</h1>
                    <p>Located in Brest, France, Epsilon Chimie formulates, analyses and produces speciality phosphorus chemical for research and industry. Our founders trained in the organometallic chemistry lab at the University of Brest; our product range still reflects that heritage.</p>
                </article>
                <div>
                    <img src={Batiment} alt="Epsilon Chimie production site in Brest, France" />
                </div>
            </div>
        </section>

        <section id="stat">
            <article>
                <ul>
                    <li><span>1995</span>FOUNDED</li>
                    <li><span>3,600 m<sup>2</sup></span>PRODUCTION SITE</li>
                    <li><span>30+</span>COUNTRIES SERVED</li>
                </ul>
            </article>
        </section>

        <section id="timeline">
            <article>
                <div className="section-label"><div className='losange'></div>timeline</div>
                <h2>Thirty-eight years of phosphorus chemistry.</h2>
            </article>

            <article>
                <ul>
                    <hr />
                    <li>
                        <h3>1995</h3>
                        <p>Foundation</p>
                        <p>Epsilon Chimie founded in Brest, focused on phosphorus specialty chemistry.</p>
                    </li>
                    <hr />
                    <li>
                        <h3>1996</h3>
                        <p>International and online</p>
                        <p>First shipments to North America and Asia. Over 30 countries served.</p>
                    </li>
                    <hr />
                    <li>
                        <h3>2010</h3>
                        <p>Expansion</p>
                        <p>Relocation to a 3,600 m<sup>2</sup> facility in Kergaradec, Guipavas (near Brest).</p>
                    </li>
                    <hr />
                    <li>
                        <h3>2012</h3>
                        <p>ICH-Q7 Guidelines</p>
                        <p>Quality management renewed and based on ICH-Q7 Guidelines.</p>
                    </li>
                    <hr />
                    
                </ul>
            </article>

        </section>


        <section id="quality">
            <article>
                <div>
                    <div className="section-label"><div className='losange'></div>quality</div>
                    <h2>ICH-Q7 Guidelines</h2>
                </div>
                <p>Our quality system is re-certified every three years. Each batch is released only after 13C-NMR, 31P-NMR or 1H-NMR confirmation, HPLC purity check and a documented visual inspection. A Certificate of Analysis accompanies every delivery.</p>
            </article>

            <article>
                <div>
                    <div className="section-label"><div className='losange'></div>compliance</div>
                    <h2>REACH & CLP compliant.</h2>
                </div>
                <p>All commercial references are pre-registered or fully registered under REACH when applicable. Safety Data Sheets follow the EU CLP classification and are supplied in English and French.</p>
            </article>
        </section>
    </>
    )
}

export default About
