import { Outlet } from 'react-router-dom';
import { NavBar } from '../../common/navBar';

export function Layout() {
  return(
    <>
      <NavBar/>
      <Outlet/>
    </> 
    );
};
