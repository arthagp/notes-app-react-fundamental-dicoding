import React from 'react'
import { getArchivedNotes, unarchiveNote, deleteNote } from '../utils/local-data'
import EmptyMessage from '../components/EmptyMessage'
import NotesList from '../components/NotesList'
import SearchBar from '../components/SearchBar'
import { useSearchParams } from 'react-router-dom';


function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  // defaultKeyWord ini berasal dari keyword: props.defaultKeyWord
  return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onUnArchiveHandler = this.onUnArchiveHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
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

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });


    return (
      <>
        <h2>Daftar Catatan Archive</h2>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        {
          this.state.notes.length === 0 ? (<EmptyMessage txtArsip={"Arsip kosong"} />) :
            (<NotesList notes={notes} onDelete={this.onDeleteHandler} onArchive={this.onUnArchiveHandler} txtArchive={'UnArchive'} />)
        }
      </>
    )
  }
}

export default ArchivePageWrapper