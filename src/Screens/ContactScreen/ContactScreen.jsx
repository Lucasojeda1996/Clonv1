import React, { useContext,useState } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import ContactsList from '../../Componentes/ContactList/ContactList'
import './ContactScreen.css'
import { IoLogoWhatsapp } from 'react-icons/io5'
import SearchBar from '../../Componentes/SearchBar/SearchBar'


export default function ContactScreen() {
  const { contacts } = useContext(ContactContext)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div >
     <header className="contact-header">
        <h1 className="contact-title">WhatsApp</h1>
        <IoLogoWhatsapp size={28} className="whatsapp-icon" />
        </header>
      <hr />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <div className="contact-list-container">
        <ContactsList contacts={filteredContacts} />
      </div>
    </div>
  )
}

