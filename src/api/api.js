import axios from 'axios';


export const addressAPI = {

    getAddress(remoteIP) {
        return axios.get(`https://geo.ipify.org/api/v1?apiKey=at_8D2btCBV4IAfe7dRUX87l6G5TvPuE&ipAddress=${remoteIP}`)
            .then(response =>{
                return response
            })
    }
}
