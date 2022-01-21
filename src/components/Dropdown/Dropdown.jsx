import React from 'react'

const Dropdown = ({ onEditHandler, onDeleteHandler }) => {
    return (
        <div className="dropdown__content">
            <p onClick={onEditHandler}>Edit</p>
            <p onClick={onDeleteHandler}>Delete</p>
        </div>
    )
}

export default Dropdown