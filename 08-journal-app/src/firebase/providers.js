import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()

export const signInwithGoogle = async () => {
    try {

        const result = await signInWithPopup(FireBaseAuth, googleProvider)
        const { displayName, email, photoURL, uid } = result.user

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error) {

        const errorCode = error.code
        const errorMessage = error.message

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {

        const result = await createUserWithEmailAndPassword(FireBaseAuth, email, password)
        const { photoURL, uid } = result.user

        await updateProfile(FireBaseAuth.currentUser, { displayName })

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error) {

        const errorCode = error.code
        const errorMessage = error.message

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const result = await signInWithEmailAndPassword(FireBaseAuth, email, password)
        const { displayName, photoURL, uid } = result.user

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    }
    catch (error) {

        const errorCode = error.code
        const errorMessage = error.message

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const logoutFireBase = async () => {
    return await FireBaseAuth.signOut()
}