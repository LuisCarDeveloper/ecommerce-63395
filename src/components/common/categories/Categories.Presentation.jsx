import { Categories } from "../../../data/data";
import { NavLink } from "react-router-dom";

import { capitalizeFirstLetter } from "../../../helpers/capitalizeWord";

export default function CategoriesPresentation ( { className } ) {
  
    return (
      <div className = { className }>
        <ul>
          { Categories.map ( (category , index) => { 
            return(                        
              <li key = {index}>
                <NavLink to =  { `/categories/${ category.descriptionCat}` } > { capitalizeFirstLetter(category.descriptionCat) }&nbsp;| </NavLink>
              </li> )             
            })}
          </ul>
    </div>
  );
};