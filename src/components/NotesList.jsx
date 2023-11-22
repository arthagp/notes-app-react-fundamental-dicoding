import React from 'react'
import NotesItem from './NotesItem'
import PropTypes from 'prop-types'


const NotesList = ({ notes, onDelete, onArchive, txtArchive }) => {
  // console.log(notes)

  return (
    <section className='notes-list'>
      {
        notes.map((note) =>
        (
          <NotesItem key={note.id}
            id={note.id}
            title={note.title}
            createdAt={note.createdAt}
            body={note.body}
            onDelete={onDelete}
            onArchive={onArchive}
            txtArchive={txtArchive}
          />
        )
        )
      }
    </section>
  )
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  txtArchive: PropTypes.string.isRequired
}

export default NotesList