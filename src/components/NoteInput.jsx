import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

const NoteInput = ({ addNote }) => {
    const [inputValues, setInputValues] = useState({
        title: '',
        body: '',
    });
    const { locale } = useContext(LocaleContext)

    const onTitleChangeEventHandler = (event) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            title: event.target.value,
        }));
    };

    const onBodyChangeEventHandler = (event) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            body: event.target.value,
        }));
    };

    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        addNote(inputValues);
    };

    return (
        <section className='add-new-page'>
            <form onSubmit={onSubmitEventHandler}>
                {/* Elemen-elemen formulir */}
                <div className='add-new-page__input'>
                    <input
                        className='add-new-page__input__title'
                        type="text"
                        placeholder={locale === 'id' ? 'Masukkan Judul di sini...' : 'Enter title here'}
                        value={inputValues.title}
                        onChange={onTitleChangeEventHandler}
                    />
                    <textarea
                        className="add-new-page__input__body"
                        placeholder={locale === 'id' ? 'Masukkan Deskripsi di sini...' : 'Enter description here'}
                        value={inputValues.body}
                        onChange={onBodyChangeEventHandler}
                    />
                </div>
                <div className='add-new-page__action'>
                    <button className="action" type="submit" title="Simpan">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                        </svg>
                    </button>
                </div>
            </form>
        </section>
    );
};

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
};

export default NoteInput;
