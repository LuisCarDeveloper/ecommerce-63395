import db from '../db/db.js';
import { collection, addDoc } from "firebase/firestore";
import products from "../mocks/products.js";

export default function seedProducts(){
    try{
        const productsRef = collection(db,'products')
        products.map(async ({id, ...dataProduct})=>{
            await addDoc(productsRef,{...dataProduct, image:`/img/${id}.webp`})
        })
    }catch(error){
        console.log(error)
    }
}

seedProducts()