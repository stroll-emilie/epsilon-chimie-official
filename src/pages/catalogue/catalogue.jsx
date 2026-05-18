import './catalogue.css';
import { SearchIcon } from "../../assets/icons/search_icon"
import { DownloadPDFIcon } from '../../assets/icons/downloadPDFIcon';
import { DownloadXLSIcon } from '../../assets/icons/downloadXLSIcon';

function Catalogue() {
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
                    <input type="text" placeholder="Search by name, CAS number, MFCD, formula or synonym..." />
                </div>

                <p>| ctrl + K</p>
            </article>
        </section>
        
        <section id="content-catalogue">
            
            <article id="filtre">
                <div>

                </div>
            </article>

            <article id="product">
                <div>
                    <p>18 RESULTS</p>
                    <div>
                        <p>SORT</p>
                        <select name="sort" id="sort">
                            <option value="1" selected>Name (A-Z)</option>
                            <option value="2" >Name (Z-A)</option>
                        </select>
                    </div>
                </div>

                <article>
                    <div className='img-container'>
                        <img src="" alt="" />
                    </div>

                    <div className='txt-container'>

                    </div>
                </article>
            </article>
        </section>
    </>
    )
}

export default Catalogue
