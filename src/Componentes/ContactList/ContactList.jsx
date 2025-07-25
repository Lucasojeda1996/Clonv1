import React, { useContext } from "react"
import ContactItem from "../ContactItem/ContactItem"
import { ContactContext } from "../../Context/ContactContext"
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner"
import "./ContactList.css"
const ContactsList = ({ contacts }) => {
  if (!contacts || contacts.length === 0) {
    return <div className="no-results">No se encontraron contactos</div>
  }
  return (
    <div className="contacts-lists">
      {contacts.map((contact) => {
        return (
          <div className="contacts-list-item" key={contact.id}>
            <ContactItem
              id={contact.id}
              name={contact.name}
              last_time_connected={contact.last_time_connected}
              img={contact.img}
              last_message={contact.last_message}
              unread_messages={contact.unread_messages}
            />
          </div>
        )
      })}
    </div>
  )
}

export default ContactsList
