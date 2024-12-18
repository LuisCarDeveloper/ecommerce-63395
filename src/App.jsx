import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {NavBar} from './components/navBar';

import {Layout} from './components/layout/Layout'
import {ItemListContainer}  from './components/itemListContainer';
import {ListContainerFilter} from './components/ListContainerFilter/ListContainerFilter'
import {ItemDetail} from './components/item/ItemDetail';

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
