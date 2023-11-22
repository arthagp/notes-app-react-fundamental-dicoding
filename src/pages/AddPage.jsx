import React, { useContext } from 'react'
import { addNote } from '../utils/network-data'
import NoteInput from '../components/NoteInput'
import { useNavigate } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

const AddPage = () => {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext)

  async function onAddNoteHandler(note) {
    await addNote(note)
    navigate('/')
  }

  return (
    <section>
      <h2>{locale === 'id' ? 'Tambah Note' : 'Add Note'}</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}

export default AddPage