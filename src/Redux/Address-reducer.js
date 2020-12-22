import {addressAPI} from "../api/api";


const SET_ADDRESS = 'SET_ADDRESS';



let initialState = {
    remoteIP: '87.250.250.242',
    ip:null,
    location: null,
    as: null,
    isp: null,
    proxy: null
}



const addressReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_ADDRESS:
            return {...state,
                ...action.data}

        default:
            return state
    }
}


export const setAddress = (ip, location, as, isp, proxy) =>
    ({type: SET_ADDRESS, data: {ip, location, as, isp, proxy}})



export const getAddress = (remoteIP) => { /*ThunkCreator*/
    return (dispatch) => {
        addressAPI.getAddress(remoteIP)
            .then(data => {
            let {ip, location, as, isp, proxy} = data.data
            dispatch(setAddress(ip, location, as, isp, proxy))
        })
    }
}



export default addressReducer