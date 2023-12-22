import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'


const reducer=combineReducers({
    authState:authReducer

})

const store=configureStore({
reducer:reducer
})

export default store;