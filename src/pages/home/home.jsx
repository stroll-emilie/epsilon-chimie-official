import './home.css'
// carousel
import { MedalIcon } from '../../assets/icons/medal_icon'
import { TimeIcon } from '../../assets/icons/time_icon'
import { LocIcon } from '../../assets/icons/localisation_icon'
import { HealthIcon } from '../../assets/icons/health_icon'

import { CircleArrowIcon } from '../../assets/icons/circle_arrow_icon'
import { SearchIcon } from '../../assets/icons/search_icon'
import { InfoCircleIcon } from '../../assets/icons/info_circle_icon'
import { GlassIcon } from '../../assets/icons/glass_icon'
import { RightArrowIcon } from '../../assets/icons/right_arrow_icon'

// Families
import HWE from '../../assets/images/schema/molecule-hwe.svg'
import Phosphonic from '../../assets/images/schema/family-phosphonic-acid.svg';
import Phosphonate from '../../assets/images/schema/family-phosphonate.svg';
import Phosphorane from '../../assets/images/schema/family-phosphorane.svg';
import Phosphonium from '../../assets/images/schema/family-phosphonium-salt.svg';
import Phosphines from '../../assets/images/schema/family-phosphine.svg';
import Intermeidates from '../../assets/images/schema/family-chemical-intermediate.svg';
import PhosphonateMark from '../../assets/images/schema/molecule-phosphonate-mark 1.svg';

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Link } from 'react-router-dom'

function Home() {
    
    /* Pour la répétition dans le carousel */
    const items = [
        { id: 'medal', icon: <MedalIcon color='var(--color-content-reversed-primary)'/>, label: 'ICH-Q7 Guidelines' },
        { id: 'health', icon: <HealthIcon color='var(--color-content-reversed-primary)'/>, label: 'most chemicals above 98%' },
        { id: 'time', icon: <TimeIcon color='var(--color-content-reversed-primary)'/>, label: 'Acknowledgment mostly within 24h' },
        { id: 'loc', icon: <LocIcon color='var(--color-content-reversed-primary)'/>, label: '100% of batches synthesised in Brest' },
    ]
    const repeated = [...items, ...items]

    /* Barre de recherche Finder */
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    

    const handleSearch = () => {
        if(!query.trim()) return;
        navigate(`/catalogue?search=${encodeURIComponent(query)}`);
    }

    const popularSearch = ["Diethyl phosphonates", "Wittig reagents", "phosphonic acids"," HWE reagents", "Phosphonium salts"];

    return (
    <>
        <section id="presentation">
            <article>
                <div>
                    <legend><div className='losange'></div>SINCE 1995, BREST, FRANCE</legend>
                    <h1>European chemicals Manufacturer</h1>
                    <p>We manufacture over hundreeds phosphonates, phosphoniums salts, phosphoranes and chemicals intermediates for R&D and industrial teams worldwide.</p>
                </div>

                <div>
                    <Link to="/catalogue">Explore the catalogue</Link>
                    <a href="#">Request for quote</a>
                </div>
            </article>

            <article>
                <div>
                    <img src={HWE} alt="" />
                </div>
                <ul>
                    <li><span>1 000+</span>REFERENCES</li>
                    <li><span>30+ YRS</span>OF EXPERIENCE</li>
                    <li><span>ICH-Q7</span>GUIDELINES</li>
                </ul>
            </article>
        </section>

        <div className="carousel">
            <div className="carousel__track">
                <ul>
                    {repeated.map((item, i) => (
                        <li key={`a-${item.id}-${i}`}>{item.icon}{item.label}</li>
                    ))}
                </ul>
                <ul aria-hidden="true">
                    {repeated.map((item, i) => (
                        <li key={`b-${item.id}-${i}`}>{item.icon}{item.label}</li>
                    ))}
                </ul>
            </div>
        </div>

        <section id="finder">
            <article>
                <div>
                    <legend><div className='losange'></div>COMPOUND FINDER</legend>
                    <h2>Search across 1 000+ references</h2>
                    <p>Search by CAS number, MFCD, synonym or molecular formula. Can't find what you need ? We synthezise on demand.</p>
                </div>
                <a href="#">Request for custom synthesis<CircleArrowIcon/></a>
            </article>

            <article>
                <div className='searchBar'>
                    <div className='searchBarContainer'>
                        {/* search bar */}
                        <div className='searchBarInput'>
                            <SearchIcon/>
                            <input 
                                type="text" 
                                placeholder="Name, CAS, MFCD, formula..." 
                                name="inputSearchBar" 
                                id="inputSearchBar"
                                
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            />
                        </div>
                        <button type='button' onClick={handleSearch}>Search</button>
                    </div>
                    <div className='popular'>
                        <ul>
                            <p>Popular : </p>
                            {popularSearch.map(search => (
                                <li
                                    key={search}
                                    onClick={() => navigate(`/catalogue?search=${encodeURIComponent(search)}`)}
                                >
                                    {search}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='filtered'>
                    <p onClick={() => navigate('catalogue?family=Phosphonic Acids')}><InfoCircleIcon/>Phosphonic Acids</p>
                    <p onClick={() => navigate('catalogue?family=Phosphonate')}><InfoCircleIcon/>Phosphonates</p>
                    <p onClick={() => navigate('catalogue?family=Phosphonium Salts')}><InfoCircleIcon/>Phosphonium Salts</p>
                    <p onClick={() => navigate('catalogue?family=Phosphorane')}><InfoCircleIcon/>Phosphoranes</p>
                    <p onClick={() => navigate('catalogue?family=Phosphine')}><InfoCircleIcon/>Phosphines</p>
                    <p onClick={() => navigate('catalogue?family=Chemical Intermediates')}><InfoCircleIcon/>Chemical Intermediates</p>
                </div>
            </article>
        </section>

        <section id='capabilites'>
            <article>
                <legend><div className='losange'></div>CAPABILITIES</legend>
                <h2>One laboratory, Three complementary services.</h2>
                <div>
                    <p>We combine a stocked catalgue, made-to-order synthesis and full analytical support.
                        <br /> <br />
                        Every compound ships with a <strong>Certificate of Analysis in-house with full traceability</strong> :
                    </p>
                    <ul>
                        <li>In house 13C-NMR</li>
                        <li>31P-NMR</li>
                        <li>1H-NMR</li>
                        <li>and HPLC characterisation (on request)</li>
                    </ul>
                </div>
                
            </article>

            <article>
                <hr/>

                <div>
                    <div>
                        <div className="glassIcon">
                            <GlassIcon/>
                        </div>
                        <div className='service'>
                            <div className="serviceTitle">
                                <div className="number">01</div>
                                <h3>Catalogue</h3>
                            </div>
                            <p>Over 1 000 phosphorus specialties mostly in stock, shipped from France (Brest) with full analytical documentation.</p>
                        </div>
                    </div>
                    <div className="arrowIcon">
                        <RightArrowIcon/>
                    </div>
                    
                </div>

                <hr/>

                <div>
                    <div>
                        <div className="glassIcon">
                            <GlassIcon/>
                        </div>
                        <div className='service'>
                            <div className="serviceTitle">
                                <div className="number">02</div>
                                <h3>Custom synthesis</h3>
                            </div>
                            <p>Non-commercial molecules on demand, from 100mg to multi-kilogram, conform to your specification.</p>
                        </div>
                    </div>
                    <div className="arrowIcon">
                        <RightArrowIcon/>
                    </div>
                    
                </div>

                <hr/>
            </article>
        </section>
        
        <section id='families'>
            <article id='families-title'>
                <div>
                    <legend><div className='losange'></div>PRODUCT FAMILIES</legend>
                    <h2>Six families, one <br />thousand compounds</h2>
                </div>
                <Link to="/catalogue">Browse the full catalogue<CircleArrowIcon/></Link>
            </article>

            <article id='families-list'>

                <div className='column'>

                    <div className='familie-element'>
                        <div>
                            <img src={Phosphonic} alt="Phosphonic schema" />
                        </div>
                        <span>
                            <div className="number">FAMILY 01</div>
                            <h3>Phosphonic Acids</h3>
                            <p>Free acids for surface functionalisation, ligand design, and pharmaceutical intermediates.</p>
                        </span>
                        <p onClick={() => navigate('catalogue?family=Phosphonic Acids')}>BROWSE FAMILY <CircleArrowIcon/></p>
                    </div>

                    <div className='familie-element'>
                        <div>
                            <img src={Phosphorane} alt="Phosphorane schema" />
                        </div>
                        <span>
                            <div className="number">FAMILY 04</div>
                            <h3>Phosphoranes</h3>
                            <p>Stabilised ylides for acyl, ether and ketone olefination.</p>
                        </span>
                        <p onClick={() => navigate('catalogue?family=Phosphorane')}>BROWSE FAMILY <CircleArrowIcon/></p>
                    </div>
                </div>

                <div className='column'>
                    <div className='familie-element'>
                        <div>
                            <img src={Phosphonate} alt="Phosphonate schema" />
                        </div>
                        <span>
                            <div className="number">FAMILY 02</div>
                            <h3>Phosphonates</h3>
                            <p>Diethyl-, dimethyl-, and dibutyl-phosphonates. The workhorses of HWE olefinations.</p>
                        </span>
                        <p onClick={() => navigate('catalogue?family=Phosphonate')}>BROWSE FAMILY <CircleArrowIcon/></p>
                    </div>

                    <div className='familie-element'>
                        <div>
                            <img src={Phosphines} alt="Phosphines schema" />
                        </div>
                        <span>
                            <div className="number">FAMILY 05</div>
                            <h3>Phosphines</h3>
                            <p>Phosphites, phosphine oxides and ligand building blocks.</p>
                        </span>
                        <p onClick={() => navigate('catalogue?family=Phosphine')}>BROWSE FAMILY <CircleArrowIcon/></p>
                    </div>
                </div>

                <div className='column'>
                    <div className='familie-element'>
                        <div>
                            <img src={Phosphonium} alt="Phosphonium schema" />
                        </div>
                        <span>
                            <div className="number">FAMILY 03</div>
                            <h3>Phosphonium Salts</h3>
                            <p>Wittig reageant precursors, including symmetrical bis-phosphonium salts for macrocycles.</p>
                        </span>
                        <p onClick={() => navigate('catalogue?family=Phosphonium Salts')}>BROWSE FAMILY <CircleArrowIcon/></p>
                    </div>

                    <div className='familie-element'>
                        <div>
                            <img src={Intermeidates} alt="Intermeidates schema" />
                        </div>
                        <span>
                            <div className="number">FAMILY 06</div>
                            <h3>Chemical Intermediates</h3>
                            <p>Piperidines, indoles, dyes and bespoke small molecules.</p>
                        </span>
                        <p onClick={() => navigate('catalogue?family=Chemical Intermediate')}>BROWSE FAMILY <CircleArrowIcon/></p>
                        
                    </div>
                </div>
            </article>

        </section>

        <section id='talk'>
            <article>
                <legend><div className='losange'></div>PRODUCT FAMILIES</legend>
                <h1>Need 100g or 1kg of a compound from our R&D</h1>
                <p>Use our reactivity to synthesise a batch quickly, within your budget. <br /> We reply to every request within <strong>48 working hours</strong>.</p>
                <nav>
                    <a href="">Request a quote</a>
                    <Link to="/custom">Custom synthesis</Link>
                </nav>
            </article>
            <img src={PhosphonateMark} alt="" />
        </section>
    </>
    )
}

export default Home
