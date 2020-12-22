import * as axios from "axios";

const instance =  axios.create({
    baseURL: '',

})


export const addressAPI = {

    getAddress(remoteIP) {
        return instance.get(`https://geo.ipify.org/api/v1?apiKey=at_vVCAR5mM9BDdzdl8OP8CDH4B4PxQe&ipAddress=${remoteIP}`)
            .then(response =>{
                return response
            })
    }
}
