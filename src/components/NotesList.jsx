import React from 'react'
import NotesItem from './NotesItem'

//TODO : NotesList akan di lempar ke NotesApp, dan akan menerima getAllNotes()

const NotesList = ({ notes, onDelete, onArchive }) => {
  console.log(notes)

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
          // {...note}
          />
        )
        )
      }
    </section>
  )
}

export default NotesList