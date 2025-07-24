import React, { useContext,useState } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import ContactsList from '../../Componentes/ContactList/ContactList'
import './ContactScreen.css'


export default function ContactScreen() {
  const { contacts } = useContext(ContactContext)

  return (
    <div >
     <header> <h1>Whatsapp</h1> </header>

      <div>
        <ContactsList />
      </div> 
    </div>
  )
}

