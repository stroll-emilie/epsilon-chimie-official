import { useState } from 'react'
import './footer.css'

function Footer() {


    return (
    <>
        <footer>
            <section>
                <article>
                    <div>
                        <h4>Epsilon Chimie</h4>
                        <p>European manufacturer of phosphorus specialities since 1995. Over 1 000 references (phosphonic acids, phosphonates, phosphonium salts, phosphoranes and chemical intermediates).</p>
                    </div>
                    
                    <div>
                        <h5>HEADQUARTERS</h5>
                        <p>
                            450 rue Antoine Lavoisier <br />
                            Kergaradec III <br />
                            29490 Brest-Guipavas, France
                        </p>
                    </div>
                    
                </article>

                <article>
                    <span>PRODUCTS</span>
                    <ul>
                        <li>Phosphonic Acids</li>
                        <li>Phosphonates</li>
                        <li>Phosphonium Salts</li>
                        <li>Phosphoranes</li>
                        <li>Full Catalogue (PDF)</li>
                    </ul>
                </article>

                <article>
                    <span>SERVICES</span>
                    <ul>
                        <li>Custom synthesis</li>
                        <li>Request a quote</li>
                        <li>Technical data sheets</li>
                        <li>MSDS download</li>
                    </ul>
                </article>

                <article>
                    <span>COMPAGNY</span>
                    <ul>
                        <li>About</li>
                        <li>Quality & ISO 9001</li>
                        <li>Press</li>

                    </ul>
                </article>

                <article>
                    <span>LEGAL</span>
                    <ul>
                        <li>Legal notice</li>
                        <li>Privacy policy</li>
                        <li>General T&Cs</li>
                        <li>Cookie policy</li>
                    </ul>
                </article>
            </section>

            <section>
                <p>© 2026 EPSILON CHIMIE SARL - 402 489 721</p>
                <article>
                    <p>ICH-Q7 QUALITY ASSURANCE</p>
                    <p>MADE IN FRANCE</p>
                    <p>+33 (0)2 98 42 46 50</p>
                </article>
                
            </section>

        </footer>
    </>
    )
}

export default Footer
