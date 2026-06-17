import './catalogue.css';

import { SearchBrokenIcon } from '../../assets/icons/search_broken_icon';
import { ReloadIcon } from '../../assets/icons/reload_icon';

import { useEffect, useState} from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';

import { useApp } from '../../context/AppContext';
import { filterAndSort, countByFamily, getProductImage, searchProducts } from '../../services/dataService';
import { getMoleculeFamily } from '../../utils/getMoleculeFamily';

import { SearchIcon } from "../../assets/icons/search_icon"
import { DownloadPDFIcon } from '../../assets/icons/downloadPDFIcon';
import { DownloadXLSIcon } from '../../assets/icons/downloadXLSIcon';
import { CircleArrowIcon } from '../../assets/icons/circle_arrow_icon';

function Catalogue() {
    const [searchParams] = useSearchParams();

    const {products} = useApp()
    const [search, setSearch] = useState(searchParams.get('search') || '');
    const [selectedFamily, setSelectedFamily] = useState(searchParams.get('family') || 'All');
    const [sortOrder, setSortOrder] = useState("nameAsc");
    const [currentPage, setCurrentPage] =useState(1);
    const ITEMS_PER_PAGE = 50;

    const navigate = useNavigate();

    const searchedProducts = searchProducts(products, search);
    const countFamily = countByFamily(searchedProducts)
    const dataProcessed = filterAndSort(searchedProducts, {search: "", selectedFamily, sortOrder})

    const totalPages = Math.ceil(dataProcessed.length / ITEMS_PER_PAGE);
    const paginated = dataProcessed.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    useEffect(() => {
        const s = searchParams.get('search') || '';
        setSearch(s);
    }, [searchParams]);

    useEffect(() => setCurrentPage(1), [search,selectedFamily])

    const popularSearch = [
        {cas: '103694-84-4', ec: '05026'},
        {cas: '1984-15-2', ec: '99147'},
        {cas: '103725-47-9', ec: '07044-1'},
        {cas: '65717-97-7', ec: '06021'}
    ]

    return (
    <>
        <section id="searchInCatalogue">
            <div className='path'><Link to="/">HOME</Link> / <span>CATALOGUE</span></div>
            <article>
                <div>
                    <h2>Product catalogue</h2>
                    <p>{dataProcessed.length} of 1,000+ references. Every batch ships with a Certificate of Analysis.</p>
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
                    {paginated.map((product, index) => {
                        const ref = product["Réf EPSILON"];
                        const imgSrc = getProductImage(ref)

                        return (
                            <Link to={`/product/${ref}`} key={ref}>
                                <article >
                                    <div className='img-container'>
                                        <div>
                                            <div className='purity'>{product["Purity"] || "-"} </div>
                                        </div>
                                        <img src={imgSrc} alt={product["NomClean"]} />
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
                            </Link>
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
                                        <h2>It seems like we don't have results for <span>"{search}"</span></h2>
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
                        </div>
                    )}
                    

                </div>
                {totalPages>1 && (
                <div id="pagination">
                    <button onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1}><CircleArrowIcon/></button>
                    <span>{currentPage}/{totalPages}</span>
                    <button onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === totalPages}><CircleArrowIcon/></button>
                </div>
                )}
            </article>
        </section>
    </>
    )
}

export default Catalogue
