import React from "react";
import { MdDelete } from 'react-icons/md'
import './styles.css'

function Reservas() {
    return (
        <div>
            <h1 className="title">Você solicitou 1 reserva</h1>
            <div className="reservas">
                <section className="imgAndTitle">
                    <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" alt='Maceio'/>
                    <strong>Viagem Maceio 7 dias</strong>
                </section>
                <section className="quantityAndButton">
                <span>Quantidade: 2</span>
                <button type="button" onClick={() => {}}>
                    <MdDelete size={40} color="#fac3da" />
                </button>
                </section>
            </div>
            <footer>
                <button type="button">SOLICITAR RESERVAS</button>
            </footer>
        </div>
    )
}

export default Reservas;