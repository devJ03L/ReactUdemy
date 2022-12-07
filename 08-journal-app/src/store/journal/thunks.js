import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FireBaseDB } from "../../firebase/config";
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, deleteNoteById, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, upDateNote } from "./journalSlice";

export const startNewNote = () => {

    return async (dispatch, getState) => {
        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc(collection(FireBaseDB, `${uid}/journal/notes`))
        await setDoc(newDoc, newNote)

        newNote.id = newDoc.id

        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))

    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}

export const startSavenote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth
        const { active: note } = getState().journal

        const noteToFireStore = { ...note }
        delete noteToFireStore.id

        const docRef = doc(FireBaseDB, `${uid}/journal/notes/${note.id}`)
        await setDoc(docRef, noteToFireStore, { merge: true })

        dispatch(upDateNote(note))
    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving())

        const fileUploadPromises = []
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file))
        }

        const photosUrls = await Promise.all(fileUploadPromises)

        dispatch(setPhotosToActiveNote(photosUrls))
    }
}

export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth
        const { active: note } = getState().journal

        const docRef = doc(FireBaseDB, `${uid}/journal/notes/${note.id}`)
        await deleteDoc(docRef)

        dispatch(deleteNoteById(note.id))
    }
}