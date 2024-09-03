import { db } from "config/firebase"
import { addDoc, collection } from "firebase/firestore"

export async function saveData(data: any, database: string) {
    try {
        const result = await addDoc(collection(db, database), data)
        return result.id
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}