export function addReserveRequest(id){
    return {
        type: 'ADD_RESERVE_REQUEST',
        id,
    }
}

export function addReserveSuccess(trip){
    return {
        type: 'ADD_RESERVE_SUCCESS',
        trip,
    }
}

export function deleteReserve(id){
    return {
        type: 'DELETE_RESERVE',
        id,
    }
}

export function updateAmountRequest(id, amount){
    return{
        type: 'UPDATE_RESERVE_REQUEST',
        id,
        amount,
    }
}

export function updateAmountSuccess(id, amount){
    return{
        type: 'UPDATE_RESERVE_SUCCESS',
        id,
        amount,
    }
}