import { createSlice } from "@reduxjs/toolkit";




const authslice=createSlice({
    name:'users',
    initialState:{
        loading:false,
        isAuthenticated: false,
    },
    reducers:{
        loginRequest(state, action){
            return {
                ...state,
                loading: true,
            }
        },
        loginSuccess(state, action){
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload.user
            }
        },
        loginFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },
        userRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        userSuccess(state,action)
        {
            return{
                loading:false,
                isAuthenticated:true,
                users:action.payload.users
            }
        },
        userFail(state,action)
        {
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        clearError(state, action){
            return {
                ...state,
                error:  null
            }
        }
    }
})



const {actions,reducer}=authslice;;

export const{userRequest,userSuccess,userFail,clearError,loginRequest,
    loginSuccess
,loginFail}=actions;


export default reducer;