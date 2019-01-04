import React from 'react'

const Search = ({ onChange }) => (
  <input
    type="text"
    onChange={onChange}
    placeholder="Enter Member's name..."
    autoFocus
  />
)

export default Search