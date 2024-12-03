import { GiCrane } from "react-icons/gi";
import { FaBuildingColumns } from "react-icons/fa6";

export default function ItemListContainerPresentation ( { className, greeting, mainMssge } ) {
  
    return (

    <div className = { className } >

          <span>{greeting}</span>
          <span> {mainMssge}</span>
          
          <div className = 'construction-logos'>
            <GiCrane />
            <FaBuildingColumns />
          </div>

    </div>  
  );
};