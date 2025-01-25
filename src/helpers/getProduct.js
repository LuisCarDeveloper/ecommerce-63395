import { collection, getDocs } from 'firebase/firestore';
import db from '../db/db';

const collectionName = collection(db,"products")

export async function getProduct(){
    try{
        const dataDB = await getDocs(collectionName)
        const data = dataDB.docs.map ((productDB)=> {
            return { id:productDB.id , ...productDB.data()}
        })
        return data
    } catch (error){
        console.log(error)
    }
}
