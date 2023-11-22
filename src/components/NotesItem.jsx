import React from 'react'
import NotesItemBody from './NotesItemBody'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'
import PropTypes from 'prop-types'


const NotesItem = ({ id, title, createdAt, body, onArchive, onDelete, txtArchive }) => {
    // console.log(id)
    return (
        <article className='note-item'>
            <NotesItemBody id={id} title={title} createdAt={createdAt} body={body} />
            <ArchiveButton id={id} onArchive={onArchive} txtArchive={txtArchive} />
            <DeleteButton id={id} onDelete={onDelete} />
        </article>
    )
}

NotesItem.propTypes = {
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    txtArchive: PropTypes.string.isRequired
}

export default NotesItem