import { useState } from 'react'
import { SearchIcon } from '../../../assets/icons/search_icon'
import '../header.css'
import { Link, useNavigate } from 'react-router-dom'
import { XIcon } from '../../../assets/icons/x_icon'

function Action() {

    const [search, setSearch] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();

    return (
    <div id='action'>
        {isOpen ? (
            <button onClick={() => {
                setIsOpen(false);
                setSearch("");
                if(search.length > 0){
                    navigate(`/catalogue?search=${encodeURIComponent(search.trim())}`)};
                }
            }
            >
                <div>
                    <SearchIcon/>
                </div>
                <input 
                    autoFocus 
                    placeholder='Search CAS...' 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={e => {
                        if(e.key === "Enter" && search.length > 0) {
                            setIsOpen(false);
                            setSearch("");
                            navigate(`/catalogue?search=${encodeURIComponent(search.trim())}`)};
                        }
                    }
                />
                <button onClick={() => { setIsOpen(false); setSearch(""); }}><XIcon/></button>
            </button>
        ) : (
            <button onClick={() => setIsOpen(true)}>Search Catalogue <SearchIcon/></button>
        )}
        <Link to="/request-for-quote">Request for quote</Link>
    </div>
    )
}

export default Action
