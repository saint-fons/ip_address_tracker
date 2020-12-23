import {addressAPI} from "../api/api";


const SET_ADDRESS = 'SET_ADDRESS';
const UPDATE_NEW_ADDRESS = 'UPDATE-NEW-ADDRESS'


let initialState = {
    remoteIP: '87.250.250.242',
    ip: null,
    location: null,
    as: null,
    isp: null,
    proxy: null
}


const addressReducer = (state = initialState, action) => {
    let stateCopy

    switch (action.type) {
        case SET_ADDRESS: {
            return {
                ...state,
                ...action.data
            }
        }
        case UPDATE_NEW_ADDRESS: {
            stateCopy = {...state}
            stateCopy.remoteIP = action.newAddress
            return stateCopy
        }



        default:
            return state
    }
}


export const setAddress = (ip, location, as, isp, proxy) =>
    ({type: SET_ADDRESS, data: {ip, location, as, isp, proxy}})

export const updateAddressAC = (text) =>
    ({type: UPDATE_NEW_ADDRESS, newAddress: text})

export const getAddress = (remoteIP) => { /*ThunkCreator*/
    return (dispatch) => {
        addressAPI.getAddress(remoteIP)
            .then(data => {
                let {ip, location, as, isp, proxy} = data.data
                dispatch(setAddress(ip, location, as, isp, proxy))
            })
    }
}

export const updateAddress = (text) => {
    return (dispatch) => {
        dispatch(updateAddressAC(text))
    }
}


export default addressReducer