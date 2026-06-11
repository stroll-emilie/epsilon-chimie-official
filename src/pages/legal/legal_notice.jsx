import './legal.css'
import { Link } from 'react-router-dom'

function LegalNotice() {

    return (
    <>
        <section id='legal-title'>
            <div className='path'><Link to="/">HOME</Link> / <span>LEGAL NOTICE</span></div>
            <div>
                <h2>Legal Notice</h2>
                <p>LAST UPDATE - JUNE 2026</p>
            </div>
        </section>

        <section id='legal-notice'>
            <article>
                <nav>
                    <button>FR</button>
                    <button className='active'>EN</button>
                </nav>
                <p>on this page</p>
                <ul>
                    <li>Art. 1 — Publisher</li>
                    <li>Art. 2 — Host</li>
                    <li>Art. 3 — Intellectual Property</li>
                    <li>Art. 4 — Liability</li>
                    <li>Art. 5 — Applicable law</li>
                    <li>Art. 6 — Change to this notice</li>
                </ul>
            </article>


            <article>
                <ul>
                    <p>In accordance with French law n° 2004-575 of 21 June 2004 on confidence in the digital economy, users of this website are hereby informed of the identity of the publisher and the host.</p>
                    <li>
                        <h3>Art. 1 — Publisher</h3>
                        <p><strong>Epsilon Chimie SARL</strong>, as a Limited Liability Company with capital of 43,158.01€ registered with the Brest Trade and Companies Register under n° 402 459 721. Registered office : 450 RUE ANTOINE LAVOISIER 29490 GUIPAVAS, FRANCE. Intra-community VAT number : FR96402459721. Publication director : Pierre-Yves Cornec, Managing Director of Epsilon Chimie SARL — pierre.cornec@epsilon-chimie.com.</p>
                    </li>

                    <li>
                        <h3>Art. 2 — Host</h3>
                        <p>This website is hosted by <strong>Bluecom SAS</strong>, as a simplified joint-stock company. Registered office : 105 RUE CHARLES NUNGESSER 29490 GUIPAVAS, FRANCE. Phone number  : 02 98 49 23 02. E-mail contact : hotline@bluecom.fr</p>
                    </li>

                    <li>
                        <h3>Art. 3 — Intellectual Property</h3>
                        <p>All content on www.epsilon-chimie.com (texts, images, graphics, logos, molecule database, software, etc.) is the exclusive property of Epsilon Chimie or is used with the authorisation of its owners. <br /><br /> Any reproduction, representation, modification, publication or adaptation, in whole or in parts, by any means whatsoever, without the prior written consent of Epsilon Chimie is prohibited.</p>
                    </li>

                    <li>
                        <h3>Art. 4 — Liability</h3>
                        <p>The information and content published on the Site is given for guidance only. Epsilon Chimie strives to keep it accurate and up to date but cannot be held liable for any inaccuracy, omission, or for any damage arising fromt its use. Safety Data Sheets remain the authoritative reference for handling information and are available on request. </p>
                    </li>

                    <li>
                        <h3>Art. 5 — Applicable law</h3>
                        <p>This legal notice is governed by French law. Any dispute relating to the website shall fall under the exclusive juridiction of the courts of Brest.</p>
                    </li>

                    <li>
                        <h3>Art. 6 — Change to this notice</h3>
                        <p>The Company reserved the right to modify this notice at any time to reflect legal or regulatory changes or modifications made to the Site. The version date is indicated at the top of this document.<br /><br /> Any access to the Site following the entry into force of an updated version of the legal notice constitute acceptance of the updated notice.</p>
                    </li>
                </ul>

            </article>
        </section>
    </>
    )
}

export default LegalNotice