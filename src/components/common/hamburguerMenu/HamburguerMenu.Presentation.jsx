import React, { useState } from 'react';
import Hamburger from 'hamburger-react';


export default function  HamburguerMenuPresentation  ( { className } )  {
  const [ isOpen, setIsOpen ] = useState( false );

  const toggleMenu = () => setIsOpen( !isOpen );

  return (
    <div className = { className }>
      {/* Hamburguer Menu with props */}
      <Hamburger
        toggled = {isOpen}
        toggle = {toggleMenu}
        color = "#FAFAFA"
        size = {40}
        duration = {0.5}
      />

      <span> Menú </span>

      {/* Menú */}
      { /*isOpen && (
        <nav>
          <ul>
            <li> <a href="#home">       Inicio        </a> </li>
            <li> <a href="#promotions"> Ofertas       </a> </li>
            <li> <a href="#category">   Categorías    </a> </li>
            <li> <a href="#returns">    Devoluciones  </a> </li>
            <li> <a href="#contact">    Contacto      </a> </li>
          </ul>
        </nav>

      )*/}
    </div>
  );
};