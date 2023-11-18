import React from 'react'
import PropTypes from 'prop-types'


const ArchiveButton = ({ id, onArchive, txtArchive }) => {
  return (
    <button className='archive-btn' onClick={() => onArchive(id)}>{txtArchive}</button>
  )
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired
}

export default ArchiveButton