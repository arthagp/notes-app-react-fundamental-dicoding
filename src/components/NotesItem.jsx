import React from 'react'
import NotesItemBody from './NotesItemBody'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'

// TODO : memasukan ItemBody, Archive Btn, dan DeleteBtn

const NotesItem = ({ id, title, createdAt, body, onArchive, onDelete }) => {
    return (
        <article className='note-item'>
            <NotesItemBody id={id} title={title} createdAt={createdAt} body={body} />
            <ArchiveButton id={id} onArchive={onArchive} />
            <DeleteButton id={id} onDelete={onDelete} />
        </article>
    )
}

export default NotesItem