import './home.css'
// carousel
import { MedalIcon } from '../../assets/icons/medal_icon'
import { TimeIcon } from '../../assets/icons/time_icon'
import { LocIcon } from '../../assets/icons/localisation_icon'
import { HealthIcon } from '../../assets/icons/health_icon'

import { CircleArrowIcon } from '../../assets/icons/circle_arrow_icon'
import { SearchIcon } from '../../assets/icons/search_icon'
import { GlassIcon } from '../../assets/icons/glass_icon'
import { RightArrowIcon } from '../../assets/icons/right_arrow_icon'

// Families
import HWE from '../../assets/images/schema/molecule-hwe.svg'
import Phosphonic from '../../assets/images/schema/family-phosphonic-acid.svg';
import Phosphorane from '../../assets/images/schema/family-phosphorane.svg';
import Phosphonate from '../../assets/images/schema/family-phosphonate.svg';
import Phosphines from '../../assets/images/schema/family-phosphine.svg';
import Phosphonium from '../../assets/images/schema/family-phosphonium-salt.svg';
import Intermediates from '../../assets/images/schema/family-chemical-intermediate.svg';
import PhosphonateMark from '../../assets/images/schema/molecule-phosphonate-mark 1.svg';
import EiffelTower from  '../../assets/images/effel_tower.webp'

import { useNavigate,Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'

const families = [
    [
        {imgSrc: Phosphonic, familyName: "Phosphonic Acids", description: "Free acids for surface functionalisation, ligand design, and pharmaceutical intermediates."},
        {imgSrc: Phosphorane, familyName: "Phosphoranes", description: "Stabilised ylides for acyl, ether and ketone olefination."},
    ],
    [
        {imgSrc: Phosphonate, familyName: "Phosphonates", description: "Diethyl-, dimethyl-, and dibutyl-phosphonates. The workhorses of HWE olefinations."},
        {imgSrc: Phosphines, familyName: "Phosphines", description: "Phosphites, phosphine oxides and ligand building blocks. "},
    ],
    [
        {imgSrc: Phosphonium, familyName: "Phosphonium Salts", description: "Wittig reagent precursors, including symmetrical bis-phosphonium salts for macrocycles. "},
        {imgSrc: Intermediates, familyName: "Chemical Intermediates", description: "Piperidines, indoles, dyes and bespoke small molecules.  "},
    ]
]

const popularSearch = [
    {cas: '103694-84-4', ec: '05026'},
    {cas: '1984-15-2', ec: '99147'},
    {cas: '103725-47-9', ec: '07044-1'},
    {cas: '65717-97-7', ec: '06021'}
]

function Home() {
    
    /* Pour la répétition dans le carousel */
    const carousel_item = [
        { id: 'medal', icon: <MedalIcon color='var(--color-content-reversed-primary)' aria-hidden="true"/>, label: 'ICH-Q7 Guidelines' },
        { id: 'health', icon: <HealthIcon color='var(--color-content-reversed-primary)' aria-hidden="true"/>, label: 'Most chemicals above 98% purity' },
        { id: 'time', icon: <TimeIcon color='var(--color-content-reversed-primary)' aria-hidden="true"/>, label: 'Acknowledgement mostly within 24 h' },
        { id: 'loc', icon: <LocIcon color='var(--color-content-reversed-primary)' aria-hidden="true"/>, label: '100% of batches synthesised in Brest' },
    ]
    const repeated = [...carousel_item, ...carousel_item]

    /* Barre de recherche Finder */
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if(!query.trim()) return;
        navigate(`/catalogue?search=${encodeURIComponent(query)}`);
    }
    
    return ( 
    <>
        <Helmet>
            <title>Epsilon Chimie — Phosphonate & Chemical Intermediates Manufacturer</title>
            <meta name="description" content="European chemical manufacturer based in Brest, France. 1,000+ phosphonates, phosphonium salts and chemical intermediates for R&D and industrial teams worldwide." />
        </Helmet>
        <section id="presentation">
            <article>
                <div>
                    <div className="section-label"><div className='losange'></div>SINCE 1995, BREST, FRANCE</div>
                    <h1>European Chemical Manufacturer</h1>
                    <p>We manufacture hundreds of phosphonates, phosphonium salts, phosphoranes and chemical intermediates for R&D and industrial teams worldwide.</p>
                </div>

                <div>
                    <Link to="/catalogue">Explore the catalogue</Link>
                    <Link to="/request-for-quote">Request for quote</Link>
                </div>
            </article>

            <article>
                <div>
                    <img src={HWE} alt="HWE olefination reaction sheme" />
                </div>
                <ul>
                    <li><span>1,000+</span>REFERENCES</li>
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
                    <div className="section-label"><div className='losange'></div>COMPOUND FINDER</div>
                    <h2>Search across 1,000+ references</h2>
                    <p>Search by CAS number, MFCD, synonym or molecular formula. Can't find what you need? We synthesise on demand.</p>
                </div>
                <Link to="/request-for-quote">Request for custom synthesis <CircleArrowIcon aria-hidden="true"/></Link>
            </article>

            <article>
                <div className='searchBar'>
                    <div className='searchBarContainer'>
                        {/* search bar */}
                        <div className='searchBarInput'>
                            <SearchIcon aria-hidden="true"/>
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
                            <li>Popular : </li>
                            {popularSearch.map(({ cas, ec }) => (
                                <li key={cas}>
                                    <button
                                        onClick={() => navigate(`/product/${encodeURIComponent(ec)}`)}
                                    >
                                        {cas}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='filtered'>
                    <button onClick={() => navigate('catalogue?family=Phosphonic Acids')}><img src={Phosphonic} alt="" aria-hidden="true"/>Phosphonic Acids</button>
                    <button onClick={() => navigate('catalogue?family=Phosphonates')}><img src={Phosphonate} alt="" aria-hidden="true"/>Phosphonates</button>
                    <button onClick={() => navigate('catalogue?family=Phosphonium Salts')}><img src={Phosphorane} alt="" aria-hidden="true"/>Phosphonium Salts</button>
                    <button onClick={() => navigate('catalogue?family=Phosphoranes')}><img src={Phosphonium} alt="" aria-hidden="true"/>Phosphoranes</button>
                    <button onClick={() => navigate('catalogue?family=Phosphines')}><img src={Phosphines} alt="" aria-hidden="true"/>Phosphines</button>
                    <button onClick={() => navigate('catalogue?family=Chemical Intermediates')}><img src={Intermediates} alt="" aria-hidden="true"/>Chemical Intermediates</button>
                </div>
            </article>
        </section>

        <section id='capabilites'>
            <img src={EiffelTower} alt="Tour Eiffel" />
            <article>
                <div className="section-label"><div className='losange'></div>CAPABILITIES</div>
                <h2>One laboratory, Three complementary services.</h2>
                <div>
                    <p>We combine a stocked catalogue, made-to-order synthesis and full analytical support.
                        <br /> <br />
                        Every compound ships with an <strong>in-house Certificate of Analysis in-house with full traceability</strong>:
                    </p>
                    <ul>
                        <li>13C-NMR</li>
                        <li>31P-NMR</li>
                        <li>1H-NMR</li>
                        <li>and HPLC characterisation (on request)</li>
                    </ul>
                </div>
                
            </article>

            <article>
                <hr/>
                <Link to="/catalogue">
                    <div>
                        <div className="glassIcon">
                            <GlassIcon aria-hidden="true"/>
                        </div>
                        <div className='service'>
                            <div className="serviceTitle">
                                <div className="number">01</div>
                                <h3>Catalogue</h3>
                            </div>
                            <p>Over 1,000 phosphorus specialties mostly in stock, shipped from France (Brest) with full analytical documentation.</p>
                        </div>
                    </div>
                    <div className="arrowIcon">
                        <RightArrowIcon aria-hidden="true"/>
                    </div>
                </Link>

                <hr/>

                <Link to="/custom">
                    <div>
                        <div className="glassIcon">
                            <GlassIcon aria-hidden="true"/>
                        </div>
                        <div className='service'>
                            <div className="serviceTitle">
                                <div className="number">02</div>
                                <h3>Custom synthesis</h3>
                            </div>
                            <p>Non-commercial molecules on demand, from 100 mg to multi-kilogram, conforming to your specifications.</p>
                        </div>
                    </div>
                    <div className="arrowIcon">
                        <RightArrowIcon aria-hidden="true"/>
                    </div>
                </Link>

                <hr/>
            </article>
        </section>
        
        <section id='families'>
            <article id='families-title'>
                <div>
                    <div className="section-label"><div className='losange'></div>PRODUCT FAMILIES</div>
                    <h2>Six families, one <br />thousand compounds</h2>
                </div>
                <Link to="/catalogue">Browse the full catalogue<CircleArrowIcon aria-hidden="true"/></Link>
            </article>

            <article id='families-list'>

                {families.map((column,i) => (
                    <div className='column' key={i}>
                        {column.map(({imgSrc,familyName,description},j) => {
                            const index = families.slice(0,i).reduce((s, g) => s + g.length, 0) + j + 1;
                        return (
                            <div className='familie-element' key={familyName}>
                                <div>
                                    <img src={imgSrc} alt={familyName} />
                                </div>
                                <span>
                                    <div className="number">FAMILY 0{index}</div>
                                    <h3>{familyName}</h3>
                                    <p>{description}</p>
                                </span>
                                <button onClick={() => navigate(`catalogue?family=${familyName}`)}>BROWSE {familyName} <CircleArrowIcon aria-hidden="true"/></button>
                            </div>
                        );
                    })}
                    </div>
                ))}
            </article>

        </section>

        <section id='talk'>
            <article>
                <div>
                    <div className="section-label"><div className='losange'></div>TALK TO OUR LAB</div>
                    <h2>Need 100g or 1kg of a compound from our R&D ?</h2>
                    <p>Use our reactivity to synthesise a batch quickly, within your budget. <br /> We reply to every request within <strong>48 working hours</strong>.</p>
                </div>
                <nav aria-label="Contact actions">
                    <Link to="/request-for-quote">Request for quote</Link>
                    <Link to="/custom">Custom synthesis</Link>
                </nav>
            </article>
            <img src={PhosphonateMark} alt="Phosphonate molecule structure" />
        </section>
    </>
    )
}

export default Home
