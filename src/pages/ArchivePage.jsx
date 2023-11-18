import React from 'react'
import { getArchivedNotes, unarchiveNote, deleteNote } from '../utils/local-data'
import EmptyMessage from '../components/EmptyMessage'
import NotesList from '../components/NotesList'


class ArchivePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getArchivedNotes()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onUnArchiveHandler = this.onUnArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes()
      }
    })
  }

  onUnArchiveHandler(id) {
    unarchiveNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes()
      }
    })
  }

  render() {
    return (
      <>
        <h2>Daftar Catatan Archive</h2>
        {
          this.state.notes.length === 0 ? (<EmptyMessage txtArsip={"Arsip kosong"} />) :
            (<NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onUnArchiveHandler} txtArchive={'UnArchive'} />)
        }
      </>
    )
  }
}

export default ArchivePage