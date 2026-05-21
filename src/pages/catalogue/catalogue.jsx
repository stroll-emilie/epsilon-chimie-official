import './catalogue.css';
import { useState, useEffect } from 'react';
import Papa from "papaparse";
import { SearchIcon } from "../../assets/icons/search_icon"
import { DownloadPDFIcon } from '../../assets/icons/downloadPDFIcon';
import { DownloadXLSIcon } from '../../assets/icons/downloadXLSIcon';

import vide from '../../assets/images/mollecules/vide.png'

const images = import.meta.glob('../../assets/images/mollecules/*.png', { eager: true });

function parseNom(nom) {
    if (!nom) return { name: "", purity: "" };
    const match = nom.match(/,\s*(min\.\s*)?([\d.]+\s*%)\s*(\([^)]+\))?/);
    if (match) {
        return {
            name: nom.slice(0, match.index).trim(),
            purity: match[2].trim()  // ex: "97 %"
        };
    }
    return { name: nom, purity: "" };
}

const imageMap = Object.fromEntries(
    Object.entries(images).map(([path, module]) => {
        const ref = path.split('/').pop().replace('.png', '');
        return [ref, module.default];
    })
);
console.log(Object.keys(images).slice(0, 5));


function Catalogue() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    // Charger le CSV
    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}Catalogue.csv`)
            .then(res => res.arrayBuffer())  
            .then(buffer => {

                const decoder = new TextDecoder("windows-1252"); 

                const csv = decoder.decode(buffer);
                
                const lines = csv.split("\n").filter(Boolean);

                const headers = lines[0].split(";").map(h => h.trim().replace(/\r/g, ""));

                const result = Papa.parse(csv, {
                    delimiter: ";",
                    header: true,
                    skipEmptyLines: true,
                    quoteChar: '"',
                    dynamicTyping: false,
                });

                const data = result.data.map(row => {
                    const { name, purity } = parseNom(row["Nom"]);
                    row["NomClean"] = name;
                    row["Purity"] = purity;
                    return row;
                });

                const grouped = {};
                data.forEach(row => {
                    const ref = String(row["Réf EPSILON"]);
                    if (!ref) return;
                    if(!grouped[ref] && row["NomPourTri"]) {
                        grouped[ref] = row;
                    }
                })
                setProducts(Object.values(grouped));
            });
    }, []);

    // filtrage par recherche
    const filtered = products.filter(p =>
        Object.values(p).some(val => 
            String(val).toLowerCase().includes(search.toLowerCase())
        )
    );

    return (
    <>
        <section id="searchInCatalogue">
            <div className='path'>HOME / <span>CATALOGUE</span></div>
            <article>
                <div>
                    <h2>Product catalogue</h2>
                    <p>18 of 1 000+ references. Every batch ships with a Certificate of Analysis.</p>
                </div>
                <div>
                    <a href=""><DownloadPDFIcon/>Catalogue (PDF)</a>
                    <a href=""><DownloadXLSIcon/>Catalogue (XLS)</a>
                </div>
            </article>
            <article>
                <div>
                    <SearchIcon/>
                    <input 
                        type="text" 
                        placeholder="Search by name, CAS number, MFCD, formula or synonym..." 
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>

                <p>| ctrl + K</p>
            </article>
        </section>
        
        <section id="content-catalogue">
            
            <article id="filtre">
                <p className='number'>CHEMICAL FAMILY</p>
                <div>
                    <p className='filter-elem'>All<span>{filtered.length}</span></p>
                    <p className='filter-elem'>Phosphonic Acids<span>3</span></p>
                    <p className='filter-elem'>Phosphonates<span>6</span></p>
                    <p className='filter-elem'>Phosphonium Salts<span>2</span></p>
                    <p className='filter-elem'>Phosphoranes<span>2</span></p>
                    <p className='filter-elem'>Phosphines<span>2</span></p>
                    <p className='filter-elem'>Chemical Intermediates<span>2</span></p>

                </div>
            </article>

            <article id="product">
                <div id="sort">
                    <p className="number">{filtered.length} RESULTS</p>
                    <div>
                        <p>SORT</p>
                        <select defaultValue="1">
                            <option value="1" >Name (A-Z)</option>
                            <option value="2" >Name (Z-A)</option>
                        </select>
                    </div>
                </div>


                <div id="product-container">
                    {filtered.map((product, index) => {
                        const ref = product["Réf EPSILON"];
                        const imgSrc = imageMap[ref] 
                            ?? imageMap[ref.padStart(5, '0')] 
                            ?? imageMap[ref.padStart(6, '0')]
                            ?? vide;

                        return (
                            <article key={ref}>
                                <div className='img-container'>
                                    <div>
                                        <div className='purity'>{product["Purity"] || "-"} </div>
                                    </div>
                                    <img src={imgSrc} alt="" />
                                </div>

                                <div className='txt-container'>
                                    <div>
                                        <div className="number">EC-{ref}</div>
                                        <p className='nomenclature' title={product["NomClean"]}>{product["NomClean"]}</p>
                                        <div className="number">
                                            <p>CAS {product["CAS"]}</p>
                                            <p>MW {product["Masse molaire"]}</p>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>Phosphoranes</li>
                                    </ul>
                                </div>
                            </article>
                        );
                    })}
                    

                </div>
            </article>
        </section>
    </>
    )
}

export default Catalogue
