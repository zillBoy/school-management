import React from 'react'

const Input = ({ className, ...props }) => {
    return (
        <div className='input__container'>
            <input className={`input__container-input input__container-input--${className}`} {...props} />
        </div>
    )
}

export default Input