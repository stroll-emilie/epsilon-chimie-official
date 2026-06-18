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
            <div id='searchButtonOn'>
                <div
                    onClick={() => {
                        setIsOpen(false);
                        if (search.trim()) {
                            navigate(`/catalogue?search=${encodeURIComponent(search.trim())}`);
                        }
                        setSearch("");
                    }}
                >
                    <SearchIcon />
                </div>

                <input
                    autoFocus
                    placeholder='Search CAS...'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === "Enter" && search.trim()) {
                            setIsOpen(false);
                            navigate(`/catalogue?search=${encodeURIComponent(search.trim())}`);
                            setSearch("");
                        }
                    }}
                />

                <button
                    type="button"
                    onClick={() => {
                        setIsOpen(false);
                        setSearch("");
                    }}
                >
                    <XIcon />
                </button>
            </div>
        ) : (
            <button id='searchButtonOff' onClick={() => setIsOpen(true)}>Search Catalogue <SearchIcon arria-hidden="true" /></button>
        )}
        <Link to="/request-for-quote">Request for quote</Link>
    </div>
    )
}

export default Action
