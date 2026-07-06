import './footer.css'
import { useNavigate, Link } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()

    return (
        <footer>
            <section>
                <article>
                    <div>
                        <span>Epsilon Chimie</span>
                        <p>European manufacturer of phosphorus specialities since 1995. Over 1,000 references (phosphonic acids, phosphonates, phosphonium salts, phosphoranes and chemical intermediates).</p>
                    </div>
                    
                    <div>
                        <span>HEADQUARTERS</span>
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
                        <li><button onClick={() => navigate('catalogue?family=Phosphonic Acids')}>Phosphonic Acids</button></li>
                        <li><button onClick={() => navigate('catalogue?family=Phosphonates')}>Phosphonates</button></li>
                        <li><button onClick={() => navigate('catalogue?family=Phosphonium Salts')}>Phosphonium Salts</button></li>
                        <li><button onClick={() => navigate('catalogue?family=Phosphoranes')}>Phosphoranes</button></li>
                        <li><button onClick={() => navigate('catalogue?family=Phosphines')}>Phosphines</button></li>
                        <li><button onClick={() => navigate('catalogue?family=Chemical Intermediates')}>Chemical Intermediates</button></li>
                        <li><a href="/EpsilonChimieCataloguePDF.pdf" download="EpsilonChimieCataloguePDF.pdf">Full Catalogue (PDF)</a></li>
                    </ul>
                </article>

                <article>
                    <span>SERVICES</span>
                    <ul>
                        <li><Link to="/custom">Custom synthesis</Link></li>
                        <li><Link to="/request-for-quote">Request for quote</Link></li>
                        <li>Technical data sheets</li>
                    </ul>
                </article>

                <article>
                    <span>COMPANY</span>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li>Quality & ICH-Q7</li>
                        <li>Press</li>

                    </ul>
                </article>

                <article>
                    <span>LEGAL</span>
                    <ul>
                        <li><Link to="/legal-notice">Legal notice</Link></li>
                        <li><Link to="/privacy-policy">Privacy policy</Link></li>
                        <li><Link to="/general-t&c">Conditions of Use</Link></li>
                        <li><Link to="/general-terms">Conditions of Sales</Link></li>
                    </ul>
                </article>
            </section>
            <section>
                <p>© 2026 EPSILON CHIMIE SARL - 402 489 721</p>
                <article>
                    <p><Link to="/about">ICH-Q7 Guidelines</Link></p>
                    <p>MADE IN FRANCE</p>
                    <p>+33 (0)2 98 42 46 50</p>
                </article>
                
            </section>

        </footer>
    )
}

export default Footer
