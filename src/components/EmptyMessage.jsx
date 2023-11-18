import React from "react";

function EmptyMessage({ txtArsip }) {
    return (
        <div className="notes-list-empty">
            <p>{txtArsip}</p>
        </div>
    )
}

export default EmptyMessage