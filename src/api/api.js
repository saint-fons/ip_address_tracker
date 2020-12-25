import axios from 'axios';


export const addressAPI = {

    getAddress(remoteIP) {
        return axios.get(`https://geo.ipify.org/api/v1?apiKey=at_vVCAR5mM9BDdzdl8OP8CDH4B4PxQe&ipAddress=${remoteIP}`)
            .then(response =>{
                return response
            })
    }
}
