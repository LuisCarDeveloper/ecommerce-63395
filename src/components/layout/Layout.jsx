import { Outlet } from 'react-router-dom';
import { NavBar } from '../navBar';

export function Layout() {
  return(
    <>
      <NavBar/>
      <Outlet/>
    </> 
    );
};
