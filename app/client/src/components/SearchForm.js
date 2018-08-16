import React from 'react';

const SearchForm = props => (
    <form>
        <div className="form-group">
        <h2>Search here!</h2>
        <label>
            
            <input
            type='text'
            name='topic'
            onChange={props.handleInputChange}
            value={props.search}
            />

        </label>
        </div>
    </form>
)