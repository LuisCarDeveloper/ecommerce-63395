import { NavLink } from "react-router-dom";
import { capitalFirstChar } from "../../../adapters/productsAdapter";

//=== Data - Categories Products=====

const Categories = [
  {idCat:'C001', descriptionCat:'cerveza', ref:'Beer' },
  {idCat:'C002', descriptionCat:'vino', ref:'Wine' },
  {idCat:'C003', descriptionCat:'pisco', ref:'Pisco' },
  {idCat:'C004', descriptionCat:'whiskie', ref:'Whisky' },
  {idCat:'C005', descriptionCat:'ron', ref:'Ron' },
];

export default function CategoriesPresentation ( { categoryList, className } ) {
  
    return (
      <div className = { className }>
        <ul>
          { categoryList.map ( (category , index) => { 
            return(                        
              <li key = {index}>
                <NavLink to =  { `/categories/${ category.descriptionCat}` } > { capitalFirstChar(category.descriptionCat) }&nbsp;| </NavLink>
              </li> )             
            })}
          </ul>
    </div>
  );
};