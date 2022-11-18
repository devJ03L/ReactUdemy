import { signInwithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logoutFireBase } from "../../firebase/providers"
import { checkingCredentials, logout, login } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSigIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const result = await signInwithGoogle()
        if (!result.ok) return dispatch(logout(result))
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const result = await registerUserWithEmailPassword({ email, password, displayName })
        if (!result.ok) return dispatch(logout(result))
        dispatch(login(result))
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const result = await loginWithEmailPassword({ email, password })
        if (!result.ok) return dispatch(logout(result))
        dispatch(login(result))
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFireBase()
        dispatch(logout({}))
    }
}