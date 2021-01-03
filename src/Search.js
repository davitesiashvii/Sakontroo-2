import React from 'react'
import './Search.css'

function Search(props) {
  return (
    <form className='filter-form container' style={{ marginTop: '70px' }}>
      <div className='input-group input-group'>
        <input
          placeholder='ძებნა'
          type='text'
          className='form-control'
          id='search'
          value={props.searchValue}
          onChange={props.handleSearch}
        />
      </div>
    </form>
  )
}

export default Search

