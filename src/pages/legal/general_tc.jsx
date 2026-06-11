import './legal.css'
import { Link } from 'react-router-dom'

function GeneralTC() {

    return (
    <>
        <section id='legal-title'>
            <div className='path'><Link to="/">HOME</Link> / <span>GENERAL T&C</span></div>
            <div>
                <h2>General Terms of Use & Conditions</h2>
                <p>LAST UPDATE - JUNE 2026</p>
            </div>
        </section>

        <section id='general-tc'>
            <article>
                <nav>
                    <button>FR</button>
                    <button className='active'>EN</button>
                </nav>
                <p>on this page</p>
                <ul>
                    <li>Art. 1 — Purpose</li>
                    <li>Art. 2 — Description and Access to the Site</li>
                    <li>Art. 3 — Intellectual Property</li>
                    <li>Art. 4 — Liability</li>
                    <li>Art. 5 — Hyperlinks</li>
                    <li>Art. 6 — Personal Data and Cookies</li>
                    <li>Art. 7 — Governing Law and Jurisdiction</li>
                    <li>Art. 8 — Changes to These Terms</li>
                </ul>
            </article>


            <article>
                <ul>
                    <li>
                        <h3>Art. 1 — Purpose</h3>
                        <p>These Terms of Use (hereinafter “Terms”) define the conditions of access to and use of the website www.epsilon-chimie.com (hereinafter the “Site”) published by Epsilon Chimie (hereinafter the “Company”). <br /><br />Accessing or using the Site in any way constitutes unconditional acceptance of these Terms. If you do not agree with these Terms, please do not use this website.</p>
                    </li>

                    <li>
                        <h3>Art. 2 — Description and Access to the Site</h3>
                        <p>The Site is a showcase website aimed at an international professional audience. It presents Epsilon Chimie's chemical synthesis products, in particular its range of pharmaceutical molecules, and allows visitors to submit quotation requests via a contact form. <br /><br /><strong>The site is not an online sales platform</strong>. No commercial transaction can be concluded directly via the Site. The information presented does not constitute a sales offer in the legal sense. <br /><br />The Site is freely accessible from any Internet-connected device. The Company reserves the right to modify, suspend, or discontinue access to all or part of the Site at any time, without notice or compensation.</p>
                    </li>

                    <li>
                        <h3>Art. 3 — Intellectual Property</h3>
                        <p>All elements from the Site — including texts, images, visuals, logos, the molecule database and its structure — are protected by intellectual property law and belong to the Company or are used with the permission of their owners. <br />Icons are free of use and come from the Iconsax library. <br /><br />The molecule database is specifically protected as a database within the meaning of EU Directive 96/9/EC on the legal protection of databases and applicable national law, benefiting from the sui generis rights of the database producer. <br /><br />Any reproduction, representation, extraction, re-use, adaptation, publication, or transmission, in whole or in part, of the Site's content, by any means, is strictly prohibited without the prior written consent of Epsilon Chimie.</p>
                    </li>

                    <li>
                        <h3>Art. 4 — Liability</h3>
                        <p>The information and content presented on the Site are provided for informational purposes only and do not constitute technical, scientific, medical, or commercial advice. Epsilon Chimie endeavours to ensure the accuracy of published information but cannot guarantee its completeness or currency. <br /><br />Product pages available on the Site are intended for qualified professionals and may be incomplete. They do not replace the official Safety Data Sheets (SDS) provided in the context of the commercial relationship and available on request.<br /><br />Products presented on the Site may be subjected to specific regulations depending on the country of use or delivery (including REACH, CLP/GHS regulations, export controls, chemical precursor regulations). It is the buyer's responsibility to verify the regulatory requirements applicable to their territory.<br /><br />The Company acceprs no liability for any direct or indirect damages resulting from access to the Site, its use, or inability to access it.</p>
                    </li>

                    <li>
                        <h3>Art. 5 — Hyperlinks</h3>
                        <p>The Site may contain hyperlinks to third-party wbesites. These links are provided for information purposes only. The Company has no control over the content of such sites and accepts no responsibility for the information published there. <br /><br />Any link to www.epsilon-chimie.com fromt a third-party wbesite must receive prior written authorisation from Epsilon Chimie.</p>
                    </li>

                    <li>
                        <h3>Art. 6 — Personal Data and Cookies</h3>
                        <p>The Site collects certain personal data under the conditions described in the <Link to="/privacy-policy">privacy policy</Link> available on this site. <br /><br />Cookies may be stored on your device while browsing. Certain cookies (in particular Google Analytics cookies) require your prior consent. This consent is collected via the cookie management banner displayed on your first visit.</p>
                    </li>

                    <li>
                        <h3>Art. 7 — Governing Law and Jurisdiction</h3>
                        <p>These Terms are governed by French law.<br/><br/>In the event of a dispute relating to the interpretation, validity or performance of these Terms, the partites will endeavour to reach an amicable settlement. If no amicable agreement is reached within thirty (30) days of written notification of the dispute, it will be submitted to the competent courts of Brest, France.<br/><br/>The French version of these Terms prevails over any translated version in the event of divergence or conflict.</p>
                    </li>

                    <li>
                        <h3>Art. 8 — Changes to These Terms</h3>
                        <p>The Company reserved the right to modify these Terms at any time to reflect legal or regulatory changes or modifications made to the Site. The version date is indicated at the top of this document.<br/><br/>Any access to the Site following the entry into force of an updated version of the Terms constitute acceptance of the updated Terms.</p>
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

export default GeneralTC