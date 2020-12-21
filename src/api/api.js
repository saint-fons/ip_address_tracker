import * as axios from "axios";

const instance =  axios.create({
    baseURL: 'https://geo.ipify.org/api/v1?apiKey=at_vVCAR5mM9BDdzdl8OP8CDH4B4PxQe&',

})


export const addressAPI = {

    getAddress() {
        return instance.get(`/`)
            .then(response =>{
                return response
            })
    }
}
