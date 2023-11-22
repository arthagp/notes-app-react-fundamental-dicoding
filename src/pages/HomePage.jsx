import React, { useState, useEffect, useContext } from 'react';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/network-data';
import NotesList from '../components/NotesList';
import EmptyMessage from '../components/EmptyMessage';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import LoadingSpinner from '../components/LoadingSpinner';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState('');
  const { locale } = useContext(LocaleContext)

  const [searchParams, setSearchParams] = useSearchParams();
  const urlKeyword = searchParams.get('keyword');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getActiveNotes();
        setNotes(data);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setKeyword(urlKeyword || '');
  }, [urlKeyword]);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);

    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const onArchiveHandler = async (id) => {
    await archiveNote(id);

    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );


  return (
    <>
      {!loading ? (
        <>
          <h2>{locale === 'id' ? 'Daftar Catatan Aktif' : 'List of active notes'}</h2>
          <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
          {notes.length === 0 ? (
            <EmptyMessage txtArsip={locale === 'id' ? 'Tidak Ada Catatan' : 'no note'} />
          ) : (
            <NotesList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} txtArchive={'Archive'} />
          )}
        </>
      ) : (<LoadingSpinner />)}

    </>
  );
};

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default HomePage;
