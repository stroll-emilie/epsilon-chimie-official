import './catalogue.css';

import { SearchBrokenIcon } from '../../assets/icons/search_broken_icon';
import { ReloadIcon } from '../../assets/icons/reload_icon';

import { useState} from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';

import { useProducts } from '../../context/AppContext';
import { filterAndSort, countByFamily, getProductImage, searchProducts } from '../../services/dataService';
import { getMoleculeFamily } from '../../utils/getMoleculeFamily';

import { SearchIcon } from "../../assets/icons/search_icon"
import { DownloadPDFIcon } from '../../assets/icons/downloadPDFIcon';
import { DownloadXLSIcon } from '../../assets/icons/downloadXLSIcon';

function Catalogue() {
    const [searchParams] = useSearchParams();

    const {products} = useProducts()
    const [search, setSearch] = useState(searchParams.get('search') || '');
    const [selectedFamily, setSelectedFamily] = useState(searchParams.get('family') || 'All');
    const [sortOrder, setSortOrder] = useState("nameAsc");

    const navigate = useNavigate();

    const searchedProducts = searchProducts(products, search);
    const countFamily = countByFamily(searchedProducts)
    const dataProcessed = filterAndSort(searchedProducts, {search: "", selectedFamily, sortOrder})


    return (
    <>
        <section id="searchInCatalogue">
            <div className='path'><Link to="/">HOME</Link> / <span>CATALOGUE</span></div>
            <article>
                <div>
                    <h2>Product catalogue</h2>
                    <p>{dataProcessed.length} of 1 000+ references. Every batch ships with a Certificate of Analysis.</p>
                </div>
                <div>
                    <a href="/EpsilonChimieCataloguePDF.pdf" download="EpsilonChimieCataloguePDF.pdf"><DownloadPDFIcon/>Catalogue (PDF)</a>
                    <a href="/EpsilonChimieCatalogueXLS.xls" download="EpsilonChimieCatalogueXLS.xls"><DownloadXLSIcon/>Catalogue (XLS)</a>
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
                        onKeyDown={e => e.key === "Enter"}
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
                    <p className="number">{dataProcessed.length} RESULTS</p>
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
                    {dataProcessed.map((product, index) => {
                        const ref = product["Réf EPSILON"];
                        const imgSrc = getProductImage(ref)

                        return (
                            <article key={ref} onClick={() => navigate(`/product/${ref}`)} style={{ cursor: 'pointer' }}>
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

                    {dataProcessed.length === 0 && (
                        <div id="empty-search">
                            <div>
                                <div id='empty-info-container'>
                                    <div id='empty-title'>
                                        <div id='empty-svg'>
                                            <SearchBrokenIcon/>
                                        </div>
                                        <h2>Oups !</h2>
                                        <h2>It seems like we don't have results for <span>"..."</span></h2>
                                    </div>
                                    <p>Check the spelling, try a CAS number or a synonym, or widen your filters. Many compounds are also available through our on-demand synthesis service.</p>
                                    <nav>
                                        <button type="button" onClick={() => { setSearch(""); setSelectedFamily("All"); }}>
                                            <ReloadIcon/> Clear search and filter
                                        </button>
                                        <Link to="/request-for-quote">Request a custom quote</Link>
                                    </nav>
                                </div>
                                <div>
                                    <div className="number">OR YOU CAN TRY ONE OF THESE</div>
                                    <ul>
                                        <li onClick={() => setSearch("Phosphonic Acids")}>Phosphonic Acids</li>
                                        <li onClick={() => setSearch("Diethyl")}>Diethyl</li>
                                        <li onClick={() => setSearch("Phosphonates")}>Phosphonates</li>
                                        <li onClick={() => setSearch("Triphenyl")}>Triphenyl</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                    

                </div>
            </article>
        </section>
    </>
    )
}

export default Catalogue
