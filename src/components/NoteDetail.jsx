import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index'

function NoteDetail({ title, body, createdAt }) {
  const newDate = showFormattedDate(createdAt)

  return (
    <section className='detail-page'>
      <h2 className='detail-page__title'>{title}</h2>
      <p className='detail-page__createdAt'>{newDate}</p>
      <p className='detail-page__body'>{body}</p>
    </section>
  );
}

// NoteDetail.propTypes = {
//   title: PropTypes.string.isRequired,
//   overview: PropTypes.string.isRequired,
//   posterPath: PropTypes.string.isRequired,
//   createdAt: PropTypes.string.isRequired
// };

export default NoteDetail;
