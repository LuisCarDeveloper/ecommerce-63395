import {NavBar} from './components/navBar';
import { ItemListContainer } from './components/itemListContainer';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
    
  return(
    <>
      <NavBar/> 
      <ItemListContainer/>
    </> 
    );
};
