import axios from "axios"
import { userFail, userRequest, userSuccess,clearError, loginRequest, loginSuccess, loginFail } from "../slices/authSlice"








export const login = (email, password) => async (dispatch) => {

    try {
        dispatch(loginRequest())
        const { data }  = await axios.post(`/login`,{email,password});
        dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginFail(error.response.data.message))
    }

}


export const register = (userData) => async (dispatch) => {

    try {
        dispatch(userRequest())
        const config = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }

        const { data }  = await axios.post(`/register`,userData, config);
        dispatch(userSuccess(data))
    } catch (error) {
        dispatch(userFail(error.response.data.message))
    }

}


export const clearAuthError = dispatch => {
    dispatch(clearError())
}