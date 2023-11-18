import React from 'react'
import { getAllNotes, deleteNote, archiveNote } from '../utils/local-data'
import NotesList from '../components/NotesList'
import EmptyMessage from '../components/EmptyMessage'

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getAllNotes()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes()
      }
    })
  }

  onArchiveHandler(id) {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes()
      }
    })
  }


  render() {
    return (
      <>
        <h2>Daftar Catatan Aktif</h2>
        {
          this.state.notes.length === 0 ? (<EmptyMessage />) :
            (<NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />)
        }
      </>
    )
  }
}

export default HomePage