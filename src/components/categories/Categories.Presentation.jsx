import { Categories } from "../../data/data";

export default function CategoriesPresentation ( { className } ) {
  
    return (
      <div className = { className }>
        <ul>
          {Categories.map ( (category , index) => { 
            return(                        
              <li key = {index}>
                <a href = { `#${ category.ref }` }> { category.descriptionCat }&nbsp;| </a>
              </li> )             
            })}
          </ul>
    </div>
  );
};