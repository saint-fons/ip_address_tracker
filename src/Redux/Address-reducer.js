import {addressAPI} from "../api/api";


const SET_ADDRESS = 'SET_ADDRESS';



let initialState = {
    address: null
}



const addressReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_ADDRESS:
            return {...state, address: action.address}

        default:
            return state
    }
}


export const setAddress = (address) =>
    ({type: SET_ADDRESS, address})



export const getAddress = () => { /*ThunkCreator*/
    return (dispatch) => {
        addressAPI.getAddress().then(data => {
            dispatch(setAddress(data.address))
        })
    }
}



export default addressReducer