import React from "react";
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'
import { useSelector, useDispatch } from "react-redux";
import './styles.css'
import { deleteReserve, updateAmountRequest} from '../../store/modules/reserve/actions'

function Reservas() {
    const dispatch = useDispatch();
    const reserves = useSelector(state => state.reserve)

function handleDelete(id){
    dispatch(deleteReserve(id))
}

function decrementAmount(trip){
    dispatch(updateAmountRequest(trip.id, trip.amount -1))
}

function incrementAmount(trip){
    dispatch(updateAmountRequest(trip.id, trip.amount +1))
}

    return (
        <div>
            <h1 className="title">Você tem {reserves.length} reserva solicitadas</h1>
            {reserves.map(reserve => (
                <div className="reservas" key={reserve.id}>
                    <section className="imgAndTitle">
                        <img src={reserve.image} alt={reserve.title}/>
                        <strong>{reserve.title}</strong>
                    </section>
                    <section className="quantityAndButton">
                    <div className="buttonsToQuantity">
                        <button type="button" onClick={() => decrementAmount(reserve)}>
                            <MdRemoveCircle size={20}/>
                        </button>
                        <span>{reserve.amount}</span>
                        <button type="button" onClick={() => incrementAmount(reserve)}>
                            <MdAddCircle size={20}/>
                        </button>
                    </div>
                    <button type="button" onClick={() => handleDelete(reserve.id)}>
                        <MdDelete size={40} color="#fac3da" />
                    </button>
                    </section>
                </div>
            ))}
            <footer>
                <button type="button">SOLICITAR RESERVAS</button>
            </footer>
        </div>
    )
}

export default Reservas;