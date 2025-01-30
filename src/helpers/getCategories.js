import { collection, getDocs } from 'firebase/firestore';
import db from '../db/db';

// Get categories List from Firestores BD
export async function getCategories(){
    try{
        const collectionName = collection(db,"categories") // Refer to collection in Firestore BD
        const dataDB = await getDocs(collectionName) // Get a objet of type QuerySnapshot, inside there are docs
        const data = dataDB.docs.map ((categoryDB)=> { // dataDB.docs is a property of QuerySnapshot, get docs in QueryDocumentSnapshot format, simil to array
            return { id:categoryDB.id , ...categoryDB.data()} // categoryDB.data() is a method of QueryDocumentSnapshot, get object whit properties 
        })
        return data
    } catch (error){
        console.log(error)
        throw new Error ('Error en obtención de categorias desde BD')
    }
}
