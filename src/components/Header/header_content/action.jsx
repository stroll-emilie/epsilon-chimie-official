import { useState } from 'react'
import { SearchIcon } from '../../../assets/icons/search_icon'
import '../header.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { XIcon } from '../../../assets/icons/x_icon'

function Action() {

    const [search, setSearch] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();


    return (
    <div id='action'>
        {!isOpen ? (
            <button onClick={() => setIsOpen(true)}>Search Catalogue <SearchIcon/></button>
        ) : (
            <div>
                <SearchIcon/>
                <input 
                    autoFocus 
                    placeholder='Search CAS...' 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={e => {
                        if(e.key === "Enter") {
                            navigate(`/catalogue?search=${encodeURIComponent(search.trim())}`);
                        }
                    }}
                />
                <button onClick={() => { setIsOpen(false); setSearch(""); }}><XIcon/></button>
            </div>
        )}
        <Link to="/request-for-quote">Request for quote</Link>
    </div>
    )
}

export default Action
