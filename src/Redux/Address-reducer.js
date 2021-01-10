import {addressAPI} from "../api/api";


const SET_ADDRESS = 'SET-ADDRESS';
const ADD_ADDRESS = 'ADD-ADDRESS';

const UPDATE_NEW_ADDRESS = 'UPDATE-NEW-ADDRESS'


let initialState = {
    remoteIP: '',
    ip: '',
    location: {
        country: '',
        region: '',
        city: '',
        lat: 0,
        lng: 0,
        postalCode: '',
        timezone: '',
        geonameId: null
    },
    as: {
        asn: null,
        name: '',
        route: '',
        domain: '',
        type: ''
    },
    isp: '',
    proxy: {
        proxy: null,
        vpn: null,
        tor: null
    }
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

export const addAddressAC = () =>
    ({type: ADD_ADDRESS})

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

export const addAddress = () => {
    return (dispatch) => {
        dispatch(addAddressAC())
    }
}


export default addressReducer