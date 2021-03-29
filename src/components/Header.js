import React, { useState } from 'react' 
import { Link } from 'react-router-dom'
import '../css/Header.css'

function Header() {

    const [searchTerm, setSearchTerm] = useState("")

    return (
        <header>
            <Link to="/home/">
                <div id="logo"><a href="index.html">Mocktube</a></div>
            </Link>
            <form id="searchbar">
                <input type="text" id="search-input" placeholder="search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                <input type="submit" id="search-btn" value="🔍"></input>
            </form>

            <div id="login">
                <a href="#" className="btn">Login</a>
            </div>
        </header>
    )
}

export default Header