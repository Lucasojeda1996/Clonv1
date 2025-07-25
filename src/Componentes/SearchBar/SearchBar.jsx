import React from 'react'
import './SearchBar.css'
import { IoSearch } from 'react-icons/io5'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <IoSearch className="search-icon" size={18} />
        <input
          type="text"
          placeholder="Buscar contacto..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  )
}
