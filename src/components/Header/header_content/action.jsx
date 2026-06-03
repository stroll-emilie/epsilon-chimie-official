import { SearchIcon } from '../../../assets/icons/search_icon'
import '../header.css'
import { Link } from 'react-router-dom'



function Action() {
    return (
    <div id='action'>
        <div>
            {/*TODO: Refaire la barre de recherche en fonction de ce qu'elle fera dans le futur quand ça arrivera */}
            <p>
                Search Catalogue <SearchIcon/>
            </p>
        </div>
        <Link to="/request-for-quote">Request a quote</Link>
    </div>
    )
}

export default Action
