import React from 'react'
import PropTypes from 'prop-types';

const SearchBar = ({ keyword, keywordChange }) => {
    return (
        <section className="search-bar">
            <input type="text"
                placeholder='Cari Berdasarkan Judul...'
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}
            />
        </section>
    )
}

SearchBar.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar