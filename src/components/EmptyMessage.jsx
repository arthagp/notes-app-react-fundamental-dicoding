import React from "react";
import PropTypes from 'prop-types'


function EmptyMessage({ txtArsip }) {
    return (
        <div className="notes-list-empty">
            <p>{txtArsip}</p>
        </div>
    )
}

EmptyMessage.propTypes = {
    txtArsip: PropTypes.string.isRequired
}

export default EmptyMessage