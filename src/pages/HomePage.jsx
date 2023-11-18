import React from 'react'
import { getActiveNotes, deleteNote, archiveNote } from '../utils/local-data'
import NotesList from '../components/NotesList'
import EmptyMessage from '../components/EmptyMessage'

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getActiveNotes()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes()
      }
    })
  }

  onArchiveHandler(id) {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes()
      }
    })
  }


  render() {

    return (
      <>
        <h2>Daftar Catatan Aktif</h2>
        {
          this.state.notes.length === 0 ? (<EmptyMessage txtArsip={'Tidak Ada Catatan'} />) :
            (<NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} txtArchive={'Archive'} />)
        }
      </>
    )
  }
}

export default HomePage