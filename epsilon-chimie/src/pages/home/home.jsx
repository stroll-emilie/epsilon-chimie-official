import './home.css'
import { MedalIcon } from '../../assets/icons/medal_icon'
import { TimeIcon } from '../../assets/icons/time_icon'
import { LocIcon } from '../../assets/icons/localisation_icon'
import { HealthIcon } from '../../assets/icons/health_icon'
import { CircleArrowIcon } from '../../assets/icons/circle_arrow_icon'
import { SearchIcon } from '../../assets/icons/search_icon'




function Home() {
    const items = [
        { icon: <MedalIcon color='var(--color-content-reversed-primary)'/>, label: 'ICH-Q7 Quality assurance' },
        { icon: <HealthIcon color='var(--color-content-reversed-primary)'/>, label: 'Every lot above 98% purity' },
        { icon: <TimeIcon color='var(--color-content-reversed-primary)'/>, label: 'Acknowledgment mostly within 24h' },
        { icon: <LocIcon color='var(--color-content-reversed-primary)'/>, label: '100% of batches synthesised in Brest' },
    ]
    const repeated = [...items, ...items, ...items]

    return (
    <>
        {/* top */}
        <section id="presentation">
            <article>
                <div>
                    <legend><div></div>SINCE 1995, BREST, FRANCE</legend>
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
                    <legend><div></div>COMPOUND FINDER</legend>
                    <h2>Search across 1 000+ references</h2>
                    <p>Search by IUPAC name, CAS number, MFCD, synonym or molecular formula. Can't finde what you need ? We synthesis on demand.</p>
                </div>
                <a href="#">Request custom synthesis<CircleArrowIcon/></a>
            </article>

            <article>
                <div>
                    <div>
                        {/* search bar */}
                        <SearchIcon/>
                        <p>Name, CAS, MFCD, formula...</p>
                        <a href="#">Search</a>
                    </div>
                </div>
                <div></div>
            </article>
        </section>
    </>
    )
}

export default Home
