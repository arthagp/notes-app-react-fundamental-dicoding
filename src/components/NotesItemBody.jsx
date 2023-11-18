import React from 'react'
import { showFormattedDate } from '../utils/index'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const NotesItemBody = ({ id, title, body, createdAt }) => {
    const newDate = showFormattedDate(createdAt)

    return (
        <>
            <Link to={`/notes/${id}`}>
                <h3 className='note-item__title'>{title}</h3>
            </Link>
            <p className='note-item__createdAt'>{newDate}</p>
            <p className='note-item__body'>{body}</p>
        </>
    )
}

NotesItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NotesItemBody