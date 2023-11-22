import React, { useState, useEffect, useContext } from 'react';
import { getArchivedNotes, unarchiveNote, deleteNote, archiveNote } from '../utils/network-data';
import EmptyMessage from '../components/EmptyMessage';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

const ArchivePage = () => {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState('');
  const { locale } = useContext(LocaleContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const urlKeyword = searchParams.get('keyword');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getArchivedNotes();
      setNotes(data);
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

  const onUnArchiveHandler = async (id) => {
    await unarchiveNote(id);

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
      <h2>{locale === 'id' ? 'Daftar Catatan Archive' : 'archive notes list'}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {notes.length === 0 ? (
        <EmptyMessage txtArsip={locale === 'id' ? 'Arsip Kosong' : 'no archive'} />
      ) : (
        <NotesList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onUnArchiveHandler} txtArchive={'UnArchive'} />
      )}
    </>
  );
};

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default ArchivePage;
