import { Brand } from '../brand';
import { HamburguerMenu } from '../HamburguerMenu';
import { Categories } from '../categories';
import { InputSearch } from '../inputSearch';
import { CarWidget } from '../carWidget';


export default function NavBarPresentation ({ className }) {

  return ( 
    
    <div className = { className }>
    
        <div className = 'container_left' >
          <Brand/>
          <HamburguerMenu/>
        </div>

        <div className = 'container_middle' >
          <Categories/>
          <InputSearch/>
        </div>

        <div className = 'container_right' >
          <CarWidget/>
        </div>

    </div>
  );
};
