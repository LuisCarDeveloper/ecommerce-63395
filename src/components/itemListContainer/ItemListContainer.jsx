import ItemListContainerPresentation from './ItemListContainer.Presentation';
import './ItemListContainer.scss'

export default function ItemListContainer ({greeting, mainMssge}) {
  
    return (
          <ItemListContainerPresentation className = 'beerclk-nav__itemList-Container' greeting= {greeting} mainMssge={mainMssge}/>
        );
};