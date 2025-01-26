import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {NavBar} from './components/common/navBar';

import {Layout} from './components/pages/layout/Layout'
import {ItemListContainer}  from './components/pages/itemListContainer';
import { ListContainerFilter } from './components/pages/listContainerFilter/ListContainerFilter';
import {ItemDetail} from './components/pages/itemDetail/ItemDetail';
import Cart from './components/pages/cart/CartPresentation';
import Checkout from './components/pages/checkout/Checkout';
import { CartProvider } from './components/context/CartContext';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return(
    <> 
      <Router>
        <CartProvider>
          <Routes>
            <Route path = "/" element = { <Layout/> }>
              <Route index element = { <ItemListContainer/> } />
              <Route path = "/categories/:idCat" element = { <ListContainerFilter/> }/>
              <Route path = "/product/:idProduct" element = { <ItemDetail/> }/>
              <Route path = "/cart" element = { <Cart/> }/>
              <Route path = "/checkout" element = { <Checkout/> }/>
              <Route path = "/*" element = { <h1>Pagina No Encontrada en construccion</h1> }/>
            </Route>
          </Routes>
        </CartProvider>
      </Router>
    </> 
    );
};
