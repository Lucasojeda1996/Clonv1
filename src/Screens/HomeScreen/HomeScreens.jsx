import React, { useContext } from 'react'
import Chat from '../../Componentes/Chat/Chat'
import NewMessageForm from '../../Componentes/NewMessageForm/NewMessegeForm'
import { Link, useParams } from 'react-router'
import { MessagesContext } from '../../Context/MessagesContext'
import { useEffect } from 'react'
import LoaderSpinner from '../../Componentes/LoaderSpinner/LoaderSpinner'
import './HomeScreens.css'
import { IoArrowBack } from 'react-icons/io5'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import Sidebar from '../../Componentes/SideBar/SideBar'



//esta es la pantalla del chat

export default function HomeScreens() {
  const { contact_id } = useParams()
  //console.log(contact_id)
  const { loadMessages, isMessagesLoading } = useContext(MessagesContext)
  useEffect(() => { loadMessages(contact_id) }, [contact_id])
  if (isMessagesLoading) {
  return <LoaderSpinner /> }

  return (
<div className="home-wrapper">
      <div className="sidebar-wrapper"><Sidebar /></div>
      <div className="chat-section">
        <header className="chat-header-wrapper">
          <Link to={`/contacts/${contact_id}/detail`} className="chat-header-link">
          <span><ChatHeader /><span className="chat-info-tooltip">Haz click para ver la información del contacto</span></span>
          </Link>
       </header>
        <Chat />
        <NewMessageForm className="formulario-fijo"/>
      
      </div>
      <Link to="/contacts" className="responsive-float-btn" aria-label="Ir a contactos">
  <span className="arrow-icon"> <IoArrowBack size={24} color="#fff" /></span>
</Link>
      </div>
  )
    
    
}



const ChatHeader = () => {
  const { contact_detail } = useContext(ContactDetailContext);

  if (!contact_detail) {
    return (
      <div>
        <Link to={"/contacts"}>
        <h2 >Selecciona un chat</h2>
        </Link>
      </div>
    );
  }

  return (
    <div className="chat-header">
      <img
        src={contact_detail.img}
        alt={`Foto de ${contact_detail.name}`}
        className="chat-header-img"
      />
      <h2>{contact_detail.name}</h2>
    </div>
  );
};