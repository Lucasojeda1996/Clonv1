import React from "react"
import { Link } from "react-router"
import "./ContactItem.css"

const ContactItem = ({
  name,
  id,
  last_time_connected,
  img,
  last_message,
  unread_messages,
}) => {
  return (
    <Link to={`/contacts/${id}/messages`} className="contact-item">
      <div className="contact-content colorful">
        <img
          src={img}
          alt={`${name} image profile`}
          className="contact-avatar colorful-border"
        />
        <div className="contact-info">
          <div className="contact-header">
            <h3 className="contact-name">{name}</h3>
            <span className="contact-time">{last_time_connected}</span>
          </div>
          <div className="contact-last-message">{last_message?.text}</div>
        </div>
        {unread_messages > 0 && (
          <span className="contact-unread-badge">{unread_messages}</span>
        )}
      </div>
    </Link>
  )
}

export default ContactItem
