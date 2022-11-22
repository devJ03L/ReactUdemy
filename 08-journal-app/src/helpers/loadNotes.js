import { collection, getDocs } from "firebase/firestore/lite"
import { FireBaseDB } from "../firebase/config"

export const loadNotes = async (uid = '') => {
    if (!uid) throw new Error('El UID no existe')
    const collectionRef = collection(FireBaseDB, `${uid}/journal/notes`)
    const docs = await getDocs(collectionRef)
    const notes = []
    docs.forEach(doc => {
        notes.push({ id: doc.id, ...doc.data() })
    });
    
    return notes
}