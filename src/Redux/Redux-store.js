import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    ProfilePage: profileReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store