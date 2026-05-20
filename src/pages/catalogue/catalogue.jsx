import './catalogue.css';
import { useState, useEffect } from 'react';
import Papa from "papaparse";
import { SearchIcon } from "../../assets/icons/search_icon"
import { DownloadPDFIcon } from '../../assets/icons/downloadPDFIcon';
import { DownloadXLSIcon } from '../../assets/icons/downloadXLSIcon';
import logo from '../../assets/images/03076.png'




function Catalogue() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    // Charger le CSV
    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}Produits.csv`)
            .then(res => res.arrayBuffer())  
            .then(buffer => {
                const decoder = new TextDecoder("windows-1252");  
                const csv = decoder.decode(buffer);
                
                const lines = csv.split("\n").filter(Boolean);
                const headers = lines[0]
                    .split(";")
                    .map(h => h.trim().replace(/\r/g, ""));        
                const data = lines.slice(1).map(line => {
                    const values = line.split(";");
                    return headers.reduce((obj, header, i) => {
                        obj[header.trim()] = values[i]?.trim().replace(/\r/g, "") ?? "";
                        return obj;
                    }, {});
                });

                const grouped = {};
                data.forEach(row => {
                    const ref = row["Réf EPSILON"];
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
                    <p className='filter-elem'>All<span>18</span></p>
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
                    {filtered.map((product, index) => (
                        <article>
                            <div className='img-container'>
                                <div>
                                    <div className="in-stock">In stock</div>
                                    <div className='purity'>90%</div>
                                </div>
                                <img src={logo} alt="" />
                            </div>

                            <div className='txt-container'>
                                <div>
                                    <div className="number">EC-{product["Réf EPSILON"]}</div>
                                    <p className='nomenclature'>{product["Nom"]}</p>
                                    <div className="number">
                                        <p>CAS {product["CAS"]}</p>
                                        <p>MW {product["Masse molaire"]}</p>
                                    </div>
                                </div>
                                <ul>
                                    <li>Phosphoranes</li>
                                    <li>Analytical</li>
                                </ul>
                            </div>
                        </article>
                    ))}
                    

                </div>
            </article>
        </section>
    </>
    )
}

export default Catalogue
