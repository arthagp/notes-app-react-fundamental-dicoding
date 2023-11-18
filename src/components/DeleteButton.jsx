import React from 'react'

const DeleteButton = ({ id, onDelete }) => {
  return (
    <button className='delete-btn' onClick={() => onDelete(id)}>Delete</button>
  )
}

export default DeleteButton