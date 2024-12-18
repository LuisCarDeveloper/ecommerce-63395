import { RiseLoader } from "react-spinners";


export default function LoaderPresentation ( { className } ) {
  
  return ( 

    <div className={className}>

      <p className="loaderText">Cargando...</p>
      <RiseLoader className="loaderLogo" size={30} color="gray"/>

    </div>
  );
};
