
import './custom.css'
import PierreCornec from '../../assets/images/cornec-200w.jpg'
import PhosphonateMark from '../../assets/images/schema/molecule-phosphonate-mark 1.svg'
import { CallIcon } from '../../assets/icons/call_icon'
import { MailIcon } from '../../assets/icons/mail_icon'

import { Link } from 'react-router-dom'

const applications = [
    {title: "Pharmaceuticals", content: "API intermediates, re-synthesis of R&D targets, key building blocks."},
    {title: "Cosmetics", content: "Active substances, formulation components, high-purity actives."},
    {title: "Synthetic chemistry", content: "Raw materials and reagents for academic and industrial R&D programmes. "},
    {title: "Analytical chemistry", content: "Reference standards, including impurities, metabolites and internal standards."},
    {title: "Biotechnology", content: "Substrates for enzymatic processes; biomass purification reagents."},
    {title: "Biology", content: "Synthesis of natural molecules or metabolites"}
]

const process = [
    {title: "Brief", content: "Share the structure, quantity and target specs. We sign an NDA if required."},
    {title: "Feasibility", content: "Our team proposes a route, a timeline and a budget within 5 working days"},
    {title: "Synthesis", content: "We synthesise a first batch at the agreed scale, from 100 mg to multi-kg."},
    {title: "QC & Delivery", content: "Full characterisation (13C-NMR, 31P-NMR, 1H-NMR, HPLC). Shipping with Certificate of Analysis."}
]

function Custom() {

    return (
    <>
        <section id="custom">
            <div>
                <div className='path'><Link to="/">HOME</Link> / <span>CUSTOM SYNTHESIS</span></div>
                <article>
                    <div className="section-label"><div className='losange'></div>on-demand synthesis</div>
                    <h1>Synthesise a batch quickly, within your budget.</h1>
                    <p>We offer on-demand synthesis of non-commercial products for research. Our team is versatile and attentive to customer needs, so we can address challenges quickly.</p>
                </article>
                <nav>
                    <Link to="/request-for-quote">Request for quote</Link>
                    <Link to="/catalogue">Browse the catalogue</Link>
                </nav>
            </div> 
            <img src={PhosphonateMark} alt="Phosphonate molecule structure" /> 
        </section>

        <section id='process'>
            <article>
                <div className="section-label"><div className='losange'></div>process</div>
                <h2>From brief to delivery, in four steps.</h2>
            </article>
            <article>
                <ul>
                    {process.map(({title,content},id) => (
                        <li key={title}>
                            <div className="roundedNumber"><p>0{id}</p></div>
                            <div>
                                <h3>{title}</h3>
                                <p>{content}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </article>
        </section>

        <section id='applications'>
            <article>
                <div>
                    <div className="section-label"><div className='losange'></div>applications</div>
                    <h2>Where our molecules are used.</h2>
                </div>
                <p>For development work, we have signed agreements with international partners dedicated to custom manufacturing. For any request, do not hesitate to contact us.</p>
            </article>
            <article>
                {applications.map(({title,content}) => (
                    <div key={title}>
                        <h3>{title}</h3>
                        <p>{content}</p>
                    </div>
                ))}
                
            </article>
        </section>

        <section id='talk-to-director'>
            <article>
                <img src={PierreCornec} alt="Pierre Cornec, Director of Epsilon Chimie" />
            </article>
            <article>
                <div>
                    <div>
                        <div className="section-label"><div className='losange'></div>about the laboratory</div>
                        <h2>Pierre Cornec, Director</h2>
                    </div>
                    <p>For any question about custom synthesis or project feasibility, write or call directly. We respond to every enquiry within 48 working hours.</p>
                </div>
                <div>
                    <a href="tel:+33298424650"> <CallIcon/>Call +33 (0)2 98 42 46 50</a>
                    <a href="mailto:pierre.cornec@epsilon-chimie.com"><MailIcon/>E-mail to : pierre.cornec[at]epsilon-chimie.com</a>
                    <Link to="/request-for-quote">Request for quote</Link>

                </div>
            </article>
        </section>
    </>
    )
}

export default Custom
