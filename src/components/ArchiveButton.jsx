import React from 'react'

const ArchiveButton = ({ id, onArchive }) => {
  return (
    <button className='archive-btn' onClick={() => onArchive(id)}>Archive</button>
  )
}

export default ArchiveButton