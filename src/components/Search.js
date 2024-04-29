
import React from 'react';
import './Search.css';

function Search({ filter, handleFilter }) {
    return (
        <div className="search-container">
            <div className="search-box">
                <input
                    type="text"
                    className="search-input"
                    value={filter}
                    onChange={handleFilter}
                    placeholder="Search your Recent Transaction "
                />
                <button type="button" className="search-button"
                     id="search-icon">🔍
                </button>
            </div>
        </div>
    )
}

export default Search;
