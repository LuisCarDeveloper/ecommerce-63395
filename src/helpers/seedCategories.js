//Charge data to DatBase
import db from '../db/db.js';
import { collection, addDoc } from "firebase/firestore";
//import Items from list array or JSON

const categories = [
    {idCat:'C001', descriptionCat:'cerveza', ref:'Beer' },
    {idCat:'C002', descriptionCat:'vino', ref:'Wine' },
    {idCat:'C003', descriptionCat:'pisco', ref:'Pisco' },
    {idCat:'C004', descriptionCat:'whiskie', ref:'Whisky' },
    {idCat:'C005', descriptionCat:'ron', ref:'Ron' },
  ];

export default function seedCategories(){
    try{
        const categoriesRef = collection(db,'categories')
        categories.map(async ({id, ...dataItem})=>{
            await addDoc(categoriesRef,{...dataItem})
        })
    }catch(error){
        console.log(error)
    }
}

seedCategories()