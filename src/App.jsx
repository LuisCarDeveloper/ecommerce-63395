import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Layout } from './components/pages/layout/Layout'
import {CartProvider} from './context/CartContext'

import { ItemListContainer }  from './components/pages/itemListContainer';
import { ListContainerFilter } from './components/pages/listContainerFilter/ListContainerFilter';
import { ItemDetail } from './components/pages/itemDetail/ItemDetail';
import Cart from './components/pages/cart/Cart';
import Checkout from './components/pages/checkout/Checkout';

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
