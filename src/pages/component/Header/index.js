import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { useSelector } from 'react-redux'
import './styles.css'

export default function Header() {
    const reserveSize = useSelector(state => state.reserve.length)

    return (
        <header className='container'>
            <Link to='/'>
                <img id='logo' src={logo} alt='logo do projeto'/>
            </Link>
            <Link className='menuRight' to='/reservas'>
                <div className='divMenuRight'>
                    <strong>Minhas Reservas</strong>
                    <span>{reserveSize} Reservas</span>
                </div>                
            </Link>
        </header>
    )
}