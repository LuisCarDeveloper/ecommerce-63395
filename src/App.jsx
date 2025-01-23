import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {NavBar} from './components/common/navBar';

import {Layout} from './components/pages/layout/Layout'
import {ItemListContainer}  from './components/pages/itemListContainer';
import { ListContainerFilter } from './components/pages/listContainerFilter/ListContainerFilter';
import {ItemDetail} from './components/pages/itemDetail/ItemDetail';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return(
    <> 
      <Router>
        <Routes>
          <Route path = "/" element = { <Layout/> }>
            <Route index element = { <ItemListContainer/> } />
            <Route path = "/categories/:idCat" element = { <ListContainerFilter/> }/>
            <Route path = "/product/:idProduct" element = { <ItemDetail/> }/>
            <Route path = "/*" element = { <h1>Pagina No Encontrada en construccion</h1> }/>
          </Route>
        </Routes>
      </Router>
    </> 
    );
};
