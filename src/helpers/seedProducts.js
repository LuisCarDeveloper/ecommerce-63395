//Charge data to DatBase
import db from '../db/db.js';
import { collection, addDoc } from "firebase/firestore";
//import Items from list array or JSON

export default function seedProducts(){
    try{
        const productsRef = collection(db,'products')
        importItems.map(async ({id, ...dataItem})=>{
            await addDoc(productsRef,{...dataItem, image:`/img/${id}.webp`})
        })
    }catch(error){
        console.log(error)
    }
}

seedProducts()