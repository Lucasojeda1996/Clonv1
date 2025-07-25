import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import './Messege.css'

export default function Messege({ emisor, hora, id, texto, status , imagen }) {
  const { handleEliminarMensaje } = useContext(MessagesContext)

  const isUser = emisor?.toLowerCase() === 'yo'

  return (
    <div className={`chat-message ${isUser ? 'my-message' : 'other-message'}`}>
      <div className="message-content">
        <span className="message-text">{texto}</span>
        <div className="message-meta">
          <span className="message-time">{hora}</span>
          {isUser && <span className="message-status">✔✔</span>}
        </div>
           {imagen && (
      <div className="message-image-wrapper">
        <img src={imagen} alt="Imagen del mensaje" className="message-image" />
      
      </div>
      
    )}
        
      </div>


      
    </div>
    
  )
  
}
