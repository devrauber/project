import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import './styles.css'

export default function Header() {
    return (
        <header className='container'>
            <Link to='/'>
                <img id='logo' src={logo} alt='logo do projeto'/>
            </Link>
            <Link className='menuRight' to='/reservas'>
                <div className='divMenuRight'>
                    <strong>Minhas Reservas</strong>
                    <span>0 reservas</span>
                </div>                
            </Link>
        </header>
    )
}