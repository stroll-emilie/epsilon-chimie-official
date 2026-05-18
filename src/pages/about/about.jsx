import './about.css'

function About() {
    return (
    <>
        <section id="aboutLab">
            <div>
                <article>
                    <div className='path'>HOME / <span>ABOUT</span></div>
                    <legend><div className='losange'></div>ABOUT THE LABORATORY</legend>
                    <h1>A french laboratory serving worldwide industry since 1995.</h1>
                    <p>Located in Brest, France, Epsilon Chimie formulates, analyses and produces speciality phosphorus chemicals for research and industry. Our founders trained in organometallic chemistry lab of the University of Brest; our product range still reflects that heritage.</p>
                </article>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </section>

        <section id="stat">
            <article>
                <ul>
                    <li><span>1995</span>FOUNDED</li>
                    <li><span>3 600 m²</span>PRODUCTION SITE</li>
                    <li><span>30+</span>COUNTRIES SERVED</li>
                </ul>
            </article>
        </section>

        <section id="quality">
            <article>
                <div>
                    <legend><div className='losange'></div>QUALITY</legend>
                    <h2>ICH-Q7 QUALITY ASSURANCE</h2>
                </div>
                <p>Our quality system is re-certified every three years. Each batch is released only after 31P-NMR or 1H-NMR confirmation, HPLC purity check and a documented visual inspection. A Certificate of Analysis accompanies every delivery.</p>
            </article>

            <article>
                <div>
                    <legend><div className='losange'></div>COMPILANCE</legend>
                    <h2>Reach & CLP compilant.</h2>
                </div>
                <p>All commercial references are pre-registered or fully registered under REACH when applicable. Safety Data Sheets follow the EU CLP classification and are supplied in English and French.</p>
            </article>
        </section>
    </>
    )
}

export default About
