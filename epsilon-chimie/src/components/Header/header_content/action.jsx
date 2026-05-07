import { SearchIcon } from '../../../assets/icons/search_icon'
import '../header.css'




function Action() {
    return (
    <div id='action'>
        <div>
            {/*TODO: Refaire la barre de recherche en fonction de ce qu'elle fera dans le futur quand ça arrivera */}
            <p>
                Search Catalogue <SearchIcon color="#000051"/>
            </p>
        </div>
        <a href="#">Request a quote</a>
    </div>
    )
}

export default Action
