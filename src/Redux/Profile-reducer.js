import {profileAPI as usersAPI} from "../api/api";

const ADD_PROFILE = 'ADD-PROFILE';
const UPDATE_NEW_PROFILE = 'UPDATE-NEW-PROFILE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    address: null
}

const profileReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default :
            return state
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}


export const updateProfileActionCreator = (text) =>
    ({type: UPDATE_NEW_PROFILE, newProfile: text})

export default profileReducer