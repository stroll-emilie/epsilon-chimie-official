import './legal.css'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {

    return (
    <>
        <section id='legal-title'>
            <div className='path'><Link to="/">HOME</Link> / <span>PRIVACY POLICY</span></div>
            <div>
                <h2>Privacy Policy</h2>
                <p>LAST UPDATE - JUNE 2026</p>
            </div>
        </section>

        <section id='privacy-policy'>
            <article>
                <nav>
                    <button>FR</button>
                    <button className='active'>EN</button>
                </nav>
                <p>on this page</p>
                <ul>
                    <li>1. Data controller</li>
                    <li>2. Data we collect</li>
                    <li>3. Purpose and legal basis</li>
                    <li>4. Retention</li>
                    <li>5. Cookies and trackers</li>
                    <li>6. Your rights</li>
                    <li>7. Transfers outside the EU</li>
                    <li>8. Data Security</li>
                    <li>9. Changes to This Policy</li>
                </ul>
            </article>


            <article>
                <p>Epsilon Chimie SARL respects your privacy and is committed to processing your personal data in accordance with the General Data Protection Regulation (EU) 2016/679 (“GRPD”) and the French Data Protection Act.</p>
                <ul>
                    <li>
                        <h3>1. Data controller</h3>
                        <p>The data controller is Epsilon Chimie SARL, 450 rue Antoine Lavoisier, 29490 Guipavas, France. You may contact us at any time at <strong>pierre.cornec[at]epsilon-chimie.com</strong>.</p>
                    </li>
                    <li>
                        <h3>2. Data we collect</h3>
                        <p>We collect only the information you voluntarily provide through our quote-request form (name, professional contact details, company, request content) and technical data collected automatically through strictly necessary cookies (see Cookie policy).</p>
                    </li>
                    <li>
                        <h3>3. Purpose and legal basis</h3>
                        <p>We process your data to answer your commercial enquiries (legitimate interest), to fulfill orders (performance of a contract), and to comply with legal accounting and REACH obligations (legal obligation). We do not carry out automated individual decision-making.</p>
                    </li>
                    <li>
                        <h3>4. Retention</h3>
                        <p>Quote-request data is retained for up to 3 years from ou rlast interaction. Commercial-relationship data is retained for 10 years as required by French commercial law. Cookie data is retained for a maximum of 13 months.</p>
                    </li>
                    <li>
                        <h3>5. Cookies and trackers</h3>
                        <span>5.1 Strictly Necessary Cookies</span>
                            <p>These cookies are essential for the website to function properly. They do not require your consent.</p>
                        <span>5.2 Analytics Cookies — Google Analytics 4</span>
                            <p>We use Google Analytics 4 (GA4) to analyse website traffic and visitor behaviour. These cookies colect aggregated browsing data (paged viewed, session duration, country of origin, traffic source). <br /><br /> These cookies are only placed on your device <strong>after your explicit consent</strong> via our cookie management banner. <br /><br /> You may withdraw your consent at any time by cliking 'Manage cookie preferences' accessible from the bottom of each page. <br /><br /> You may also opt out of Google Analytics tracking by installing the official browser add-on: https://tools.google.com/dipage/gaoptout</p>
                    </li>
                    <li>
                        <h3>6. Your rights</h3>
                        <p>Under the GPRD and applicable data protection law, you have the following rights regarding your personal data :</p>
                        <ul>
                            <li><strong>Right of access</strong> (Art. 15 GPRD): obtain a copy of the data we hold about you</li>
                            <li><strong>Right to rectification</strong> (Art. 16): correct inaccurate or incomplete data</li>
                            <li><strong>Right to erasure</strong> (Art. 17): request deletion of your data ('right to be forgotten')</li>
                            <li><strong>Right to restriction of processing</strong> (Art. 18): suspend processing of your data</li>
                            <li><strong>Right to data portability</strong> (Art. 20): receive your data in a structured, machine-readable format</li>
                            <li><strong>Right to object</strong> (Art. 21): object to processing based on legitimate interest</li>
                            <li><strong>Right to withdraw consent at any time</strong> (Art. 7 GRPD) <br /><br /> To exercise the rights, please write to us at <strong>pierre.cornec[at]epsilon-chimie.com</strong>. We will respond within one month (extendable to three months for complex requests). <br /><br /> If you believe your rights are not being respected, you have the right to lodge a complaint with the CNIL (French Data Protection Authority) at: www.cnil.fr. If you are based outside France, you may alternatively contact your local host supervisory authority.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>7. Transfers outside the EU</h3>
                        <p>Your data is primarily processed within the European Union. Any transfer outside the EEA is covered by the European Commission's Standard Contractual Clauses. </p>
                    </li>
                    <li>
                        <h3>8. Data Security</h3>
                        <p>Epsilon Chimie implements appropriate technical and organisational measures to ensure the security and confidentiality of your personal data, in particular against any unauthorised access, loss, alteration, or discolsure. These measures are regularly reviewed.</p>
                    </li>
                    <li>
                        <h3>9. Changes to This Policy</h3>
                        <p>Epsilon Chimie reserves the right to update this Privacy Policy at any time, in particular to comply with any regulatory changes. The date of last update is indicated at the top of this document. We encourage you to review it regularly.</p>
                    </li>
                </ul>
                <div>
                    <p>The English version is provided for convenience only. In the event of any discrepancy, the French version shall prevail.</p>
                </div>
            </article>
        </section>
        
    </>
    )
}

export default PrivacyPolicy