import React from 'react'
import { showFormattedDate } from '../utils/index'
import { Link } from 'react-router-dom'

//TODO : memasukan title, date, desc

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

export default NotesItemBody