import { GiCrane } from "react-icons/gi";
import { FaBuildingColumns } from "react-icons/fa6";

export default function ItemListContainerPresentation ( { className } ) {
  
    return (

    <div className = { className } >

          <span>Bienvenido a "Beer Click ", su tienda Online de bebidas.</span>
          <span> Estamos construyendo la plataforma de compra, gracias por su paciencia....!!!</span>
          
          <div className = 'construction-logos'>
            <GiCrane />
            <FaBuildingColumns />
          </div>

    </div>  
  );
};