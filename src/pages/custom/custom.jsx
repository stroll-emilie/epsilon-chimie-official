
import './custom.css'
import PierreCornec from '../../assets/images/cornec-200w.jpg'
import PhosphonateMark from '../../assets/images/schema/molecule-phosphonate-mark 1.svg'
import { CallIcon } from '../../assets/icons/call_icon'
import { MailIcon } from '../../assets/icons/mail_icon'

import { Link } from 'react-router-dom'

function Custom() {
    return (
    <>
        <section id="custom">
            <div>
                <div className='path'><Link to="/">HOME</Link> / <span>CUSTOM SYNTHESIS</span></div>
                <article>
                    <legend><div className='losange'></div>ABOUT THE LABORATORY</legend>
                    <h1>Synthesise a batch quickly, respecting your budget.</h1>
                    <p>We offer on-demand synthesis of non-commercial products for research. Our team is polyvalent and attentive to customer needs, so we can address challenges quickly.</p>
                </article>
                <nav>
                    <Link to="/request-for-quote">Request a quote</Link>
                    <Link to="/catalogue">Browse the catalogue</Link>
                </nav>
            </div> 
            <img src={PhosphonateMark} alt="" /> 
        </section>

        <section id='process'>
            <article>
                <legend><div className='losange'></div>PROCESS</legend>
                <h2>From brief to delivery, in four steps.</h2>
            </article>
            <article>
                <ul>
                    <li>
                        <div className="roundedNumber"><p>01</p></div>
                        <div>
                            <h3>Brief</h3>
                            <p>Share the structure, quantity and target specs, We sign an NDA if required.</p>
                        </div>
                    </li>

                    <li>
                        <div className="roundedNumber"><p>02</p></div>
                        <div>
                            <h3>Feasibility</h3>
                            <p>Our team proposes a route, a timeline and a budget within 5 working days.</p>
                        </div>
                    </li>

                    <li>
                        <div className="roundedNumber"><p>03</p></div>
                        <div>
                            <h3>Synthesis</h3>
                            <p>We synthesise a first batch at the agreed scale, from 100 mg to multi-kg.</p>
                        </div>
                    </li>

                    <li>
                        <div className="roundedNumber"><p>04</p></div>
                        <div>
                            <h3>QC & Delivery</h3>
                            <p>Full characterisation (13C-NMR, 31P-NMR, 1H-NMR, HPLC-). Shipping with Certificate of Analysis.</p>
                        </div>
                    </li>
                </ul>
            </article>
        </section>

        <section id='applications'>
            <article>
                <div>
                    <legend><div className='losange'></div>APPLICATIONS</legend>
                    <h2>Where our molecules are used.</h2>
                </div>
                <p>For development work, we have signed agreements with international partners dedicated to custom manufacturing. For any request, do not hesitate to contact us.</p>
            </article>
            <article>
                <div>
                    <h3>Pharmaceuticals</h3>
                    <p>API intermediates, re-synthesis of R&D targets, key building blocks.</p>
                </div>
                <div>
                    <h3>Cosmetics</h3>
                    <p>Active substances, formulation components, high-purity actives.</p>
                </div>
                <div>
                    <h3>Synthetic chemistry</h3>
                    <p>Raw materials and reagents for academic and industrial R&D programmes.</p>
                </div>
                <div>
                    <h3>Analytical chemistry</h3>
                    <p>Reference standards, including impurities, metabolites and internal standards.</p>
                </div>
                <div>
                    <h3>Biotechnology</h3>
                    <p>Substrates for enzymatic processes; biomass purification reagents.</p>
                </div>
                <div>
                    <h3>Biology</h3>
                    <p>Synthesis of natural molecules or metabolites.</p>
                </div>
            </article>
        </section>

        <section id='talk-to-director'>
            <article>
                <img src={PierreCornec} alt="Pierre Cornec" />
            </article>
            <article>
                <div>
                    <div>
                        <legend><div className='losange'></div>ABOUT THE LABORATORY</legend>
                        <h2>Pierre Cornec, Director</h2>
                    </div>
                    <p>For any question about custom synthesis or project feasibility, write or call directly. We respond to every enquiry within 48 working hours.</p>
                </div>
                <div>
                    <a href="tel:+33298424650"> <CallIcon/>Call +33 (0)2 98 42 46 50</a>
                    <a href="mailto:pierre.cornec@epsilon-chimie.com"><MailIcon/>Mail to : pierre.corner[at]epsilon-chimie.com</a>
                    <Link to="/request-for-quote">Request a quote</Link>

                </div>
            </article>
        </section>
    </>
    )
}

export default Custom
