import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <header className='container'>
            <Link to='/'>
                <img src={logo} alt='logo do projeto'/>
            </Link>
        </header>
    )
}

export default Header