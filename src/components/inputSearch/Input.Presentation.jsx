import { IoSearch } from "react-icons/io5";

export default function InputSearchPresentation ( { className } ) {
  
	return ( 

    <div className = { className } >
			
			<input placeholder = 'Buscar productos'/>

			<button type = 'button'>
				<IoSearch className = 'search-icon'/>
			</button>

    </div>

	);
};