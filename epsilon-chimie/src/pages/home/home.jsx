import './home.css'
import { MedalIcon } from '../../assets/icons/medal_icon'
import { TimeIcon } from '../../assets/icons/time_icon'
import { LocIcon } from '../../assets/icons/localisation_icon'
import { HealthIcon } from '../../assets/icons/health_icon'
import { CircleArrowIcon } from '../../assets/icons/circle_arrow_icon'
import { SearchIcon } from '../../assets/icons/search_icon'
import { InfoCircleIcon } from '../../assets/icons/info_circle_icon'
import { GlassIcon } from '../../assets/icons/glass_icon'
import { RightArrowIcon } from '../../assets/icons/right_arrow_icon'





function Home() {

    /* Pour la répétition dans le carousel */
    const items = [
        { icon: <MedalIcon color='var(--color-content-reversed-primary)'/>, label: 'ICH-Q7 Quality assurance' },
        { icon: <HealthIcon color='var(--color-content-reversed-primary)'/>, label: 'Every lot above 98% purity' },
        { icon: <TimeIcon color='var(--color-content-reversed-primary)'/>, label: 'Acknowledgment mostly within 24h' },
        { icon: <LocIcon color='var(--color-content-reversed-primary)'/>, label: '100% of batches synthesised in Brest' },
    ]
    const repeated = [...items, ...items]

    return (
    <>
        {/* top */}
        <section id="presentation">
            <article>
                <div>
                    <legend><div className='losange'></div>SINCE 1995, BREST, FRANCE</legend>
                    <h1>European chemicals Manufacturer</h1>
                    <p>We manufacture over thousands phosphonates, phosphoniums salts, phosphoranes and chemicals intermediates for research and industrial teams across Europe and beyond.</p>
                </div>

                <div>
                    <a href="#">Explore the catalogue</a>
                    <a href="#">Request a quote</a>
                </div>
            </article>

            <article>

                <img src="" alt="" />
                <ul>
                    <li><span>1 000+</span>REFERENCES</li>
                    <li><span>30+ YRS</span>OF EXPERIENCE</li>
                    <li><span>ICH-Q7</span>QUALITY ASSURANCE</li>
                </ul>
            </article>
        </section>

        {/* carousel */}
        <div className="carousel">
            <div className="carousel__track">
                <ul>
                    {repeated.map((item, i) => (
                        <li key={i}>{item.icon}{item.label}</li>
                    ))}
                </ul>
                <ul aria-hidden="true">
                    {repeated.map((item, i) => (
                        <li key={i}>{item.icon}{item.label}</li>
                    ))}
                </ul>
            </div>
        </div>

        <section id="finder">
            <article>
                <div>
                    <legend><div className='losange'></div>COMPOUND FINDER</legend>
                    <h2>Search across 1 000+ references</h2>
                    <p>Search by IUPAC name, CAS number, MFCD, synonym or molecular formula. Can't finde what you need ? We synthesis on demand.</p>
                </div>
                <a href="#">Request custom synthesis<CircleArrowIcon/></a>
            </article>

            <article>
                <div className='searchBar'>
                    <div className='searchBarContainer'>
                        {/* search bar */}
                        <div className='searchBarInput'>
                            <SearchIcon/>
                            <input type="text" placeholder="Name, CAS, MFCD, formula..." name="inputSearchBar" id="inputSearchBar"/>
                        </div>
                        <button type='button'>Search</button>
                    </div>
                    <div className='popular'>
                        <ul>
                            <p>Popular : </p>
                            <li>Diethyl phosphonates</li>
                            <li>Wittig reagents</li>
                            <li>Phosphonic acids</li>
                            <li>HWE reagents</li>
                            <li>Phosphonium salts</li>

                        </ul>
                    </div>
                </div>

                <div className='filtered'>
                    <p><InfoCircleIcon/>Phosphonic Acids</p>
                    <p><InfoCircleIcon/>Phosphonates</p>
                    <p><InfoCircleIcon/>Phosphonium Salts</p>
                    <p><InfoCircleIcon/>Phosphoranes</p>
                    <p><InfoCircleIcon/>Phosphines</p>
                    <p><InfoCircleIcon/>Chemical Intermediates</p>
                </div>
            </article>
        </section>

        <section id='capabilites'>
            <article>
                <legend><div className='losange'></div>CAPABILITIES</legend>
                <h2>One laboratory, Three complementary services.</h2>
                <p>We combine a stocked catalgue, made-to-order synthesis and full analytical support. Every compound ships with a <strong>Certificate of Analysis</strong>.</p>
            </article>

            <article>
                <hr/>

                <div>
                    <div className="glassIcon">
                        <GlassIcon/>
                    </div>
                    <div className='service'>
                        <div className="serviceTitle">
                            <div className="number">01</div>
                            <h3>Catalogue synthesis</h3>
                        </div>
                        <p>Over 1 000 phosphorus specialties in stock, shipped from Brest with full analytical documentation.</p>
                    </div>
                    <div className="arrowIcon">
                        <RightArrowIcon/>
                    </div>
                    
                </div>

                <hr/>

                <div>
                    <div className="glassIcon">
                        <GlassIcon/>
                    </div>
                    <div className='service'>
                        <div className="serviceTitle">
                            <div className="number">02</div>
                            <h3>Custom synthesis</h3>
                        </div>
                        <p>Non-commercial molecules on demand, from 100mg to multi-kilogram, to your specification.</p>
                    </div>
                    <div className="arrowIcon">
                        <RightArrowIcon/>
                    </div>
                    
                </div>

                <hr/>

                <div>
                    <div className="glassIcon">
                        <GlassIcon/>
                    </div>
                    <div className='service'>
                        <div className="serviceTitle">
                            <div className="number">03</div>
                            <h3>Analytical support</h3>
                        </div>
                        <p>In-house 31P-NMR, 1H-NMR and HPLC characterisation. A Certificate of Analysis accompanies every batch.</p>
                    </div>
                    <div className="arrowIcon">
                        <RightArrowIcon/>
                    </div>
                    
                </div>

                <hr/>
            </article>
        </section>
        
        <section id='families'>
            <article>
                <legend><div className='losange'></div>PRODUCT FAMILIES</legend>
                <h2>Six families, one thousand compounds</h2>
            </article>

        </section>
    </>
    )
}

export default Home
