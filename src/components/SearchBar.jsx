import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

const SearchBar = ({ keyword, keywordChange }) => {
    const { locale } = useContext(LocaleContext)

    return (
        <section className="search-bar">
            <input type="text"
                placeholder={locale === 'id' ? 'Cari Berdasarkan Judul...' : 'Search By Title'}
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