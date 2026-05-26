import './catalogue.css';
import { useState, useEffect } from 'react';
import Papa from "papaparse";

import { getMoleculeFamily } from '../../utils/getMoleculeFamily';

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


function Catalogue() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedFamily, setSelectedFamily] = useState("All");
    const [sortOrder, setSortOrder] = useState("nameAsc");


    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}Catalogue.csv`)
            .then(res => res.arrayBuffer())  
            .then(buffer => {

                const decoder = new TextDecoder("utf-8"); 

                const csv = decoder.decode(buffer);
                
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


    const filtered = products
        // filtre par recherche
        .filter(p => Object.values(p).some(val => String(val).toLowerCase().includes(search.toLowerCase())))
        // filtre par selection de filtre
        .filter(p => selectedFamily === "All" || getMoleculeFamily(p) === selectedFamily)
        // par tri
        .sort((a,b) => {
            switch(sortOrder) {
                case "nameAsc" :    return a["NomPourTri"].localeCompare(b["NomPourTri"]);
                case "nameDesc" :   return b["NomPourTri"].localeCompare(a["NomPourTri"]);
                case "casAsc":      return a["CAS"].localeCompare(b["CAS"]);
                case "casDesc":     return b["CAS"].localeCompare(a["CAS"]);
                case "purityAsc": {
                    
                    const pA = Number.parseFloat(a["Purity"]);
                    const pB = Number.parseFloat(b["Purity"]);
                    if (Number.isNaN(pA)) return 1;   // a va en bas
                    if (Number.isNaN(pB)) return -1;  // b va en bas
                    return pB - pA;
                }
                case "purityDesc": {
                    const pA = Number.parseFloat(a["Purity"]);
                    const pB = Number.parseFloat(b["Purity"]);
                    if (Number.isNaN(pA)) return 1;   // a va en bas
                    if (Number.isNaN(pB)) return -1;  // b va en bas
                    return pA - pB;
                    
                }default: return 0;
            }
        });

    // compteur de produit par famille de molécule
    const countFamily = {
        "All": products.length,
        "Phosphonic Acids": products.filter(p => getMoleculeFamily(p) === "Phosphonic Acids").length,
        "Phosphonate": products.filter(p => getMoleculeFamily(p) === "Phosphonate").length,
        "Phosphonium Salts": products.filter(p => getMoleculeFamily(p) === "Phosphonium Salts").length,
        "Phosphorane": products.filter(p => getMoleculeFamily(p) === "Phosphorane").length,
        "Phosphine": products.filter(p => getMoleculeFamily(p) === "Phosphine").length,
        "Chemical Intermediate": products.filter(p => getMoleculeFamily(p) === "Chemical Intermediate").length,
    };

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
                    {Object.entries(countFamily).map(([family,count]) => (
                        <button
                            key={family}
                            className={`filter-elem ${selectedFamily === family ? "active" : ""}`}
                            onClick={() => setSelectedFamily(family)}
                        >
                            {family}<span>{count}</span>
                        </button>
                    ))}


                </div>
            </article>

            <article id="product">
                <div id="sort">
                    <p className="number">{filtered.length} RESULTS</p>
                    <div>
                        <p>SORT</p>
                        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                            <option value="nameAsc" >Name (A➔Z)</option>
                            <option value="nameDesc" >Name (Z➔A)</option>
                            <option value="casAsc" >CAS (0/9)</option>
                            <option value="casDesc" >CAS (9/0)</option>
                            <option value="purityAsc" >Purity (↗)</option>
                            <option value="purityDesc" >Purity (↘)</option>
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
                                        <li>{getMoleculeFamily(product)}</li>
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
