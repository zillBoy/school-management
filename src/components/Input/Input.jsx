import React from 'react'

const Input = ({ ...props }) => {
    return (
        <div className='input__container'>
            <input className='input__container-input' {...props} />
        </div>
    )
}

export default Input