import React from 'react';
import * as axios from "axios";

const instance =  axios.create({
    withCredentials: true,
    baseURL: 'https://geo.ipify.org/api/v1?apiKey=at_vVCAR5mM9BDdzdl8OP8CDH4B4PxQe&ipAddress=8.8.8.8',
    headers: {
        "API-KEY": "at_vVCAR5mM9BDdzdl8OP8CDH4B4PxQe"
    }
})


export const profileAPI = {

    getProfile(userId) {
        return instance.get(``)
    }
}
