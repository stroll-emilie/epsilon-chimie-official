import './footer.css'
import { useNavigate, Link } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()

    return (
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
                        <button onClick={() => navigate('catalogue?family=Phosphonic Acids')}>Phosphonic Acids</button>
                        <button onClick={() => navigate('catalogue?family=Phosphonates')}>Phosphonates</button>
                        <button onClick={() => navigate('catalogue?family=Phosphonium Salts')}>Phosphonium Salts</button>
                        <button onClick={() => navigate('catalogue?family=Phosphoranes')}>Phosphoranes</button>
                        <button onClick={() => navigate('catalogue?family=Phosphines')}>Phosphines</button>
                        <button onClick={() => navigate('catalogue?family=Chemical Intermediates')}>Chemical Intermediates</button>
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
                        <li>Quality & ISO 9001</li>
                        <li>Press</li>

                    </ul>
                </article>

                <article>
                    <span>LEGAL</span>
                    <ul>
                        <li><Link to="/legal-notice">Legal notice</Link></li>
                        <li><Link to="/privacy-policy">Privacy policy</Link></li>
                        <li><Link to="/general-t&c">General T&Cs</Link></li>
                        <li>Cookie policy</li>
                    </ul>
                </article>
            </section>

            <section>
                <p>© 2026 EPSILON CHIMIE SARL - 402 489 721</p>
                <article>
                    <p>ICH-Q7 Guidelines</p>
                    <p>MADE IN FRANCE</p>
                    <p>+33 (0)2 98 42 46 50</p>
                </article>
                
            </section>

        </footer>
    )
}

export default Footer
