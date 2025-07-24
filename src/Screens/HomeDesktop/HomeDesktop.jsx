
import React from 'react';
import Sidebar from '../../Componentes/SideBar/SideBar';
import "./homedesktop.css"
import Chat from '../../Componentes/Chat/Chat';
import ChatDesktop from '../../Componentes/ChatDesktop/ChatDesktop';

export default function homedesktop() {
  return (
    <div className='contenedor-padre' >
      <Sidebar></Sidebar>
      <div className='mensajes'>hola </div>
    </div>
  );
}
