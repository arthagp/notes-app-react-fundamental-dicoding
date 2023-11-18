import React from 'react'
import { getActiveNotes, deleteNote, archiveNote } from '../utils/local-data'
import NotesList from '../components/NotesList'
import EmptyMessage from '../components/EmptyMessage'
import SearchBar from '../components/SearchBar'
import { useSearchParams } from 'react-router-dom';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  // defaultKeyWord ini berasal dari keyword: props.defaultKeyWord
  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
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
        <h2>Daftar Catatan Aktif</h2>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        {
          this.state.notes.length === 0 ? (<EmptyMessage txtArsip={'Tidak Ada Catatan'} />) :
            (<NotesList notes={notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} txtArchive={'Archive'} />)
        }
      </>
    )
  }
}

export default HomePageWrapper