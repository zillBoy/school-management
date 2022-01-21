import React from 'react'

const Button = ({ btnText, ...props }) => {
    return (
        <div className='button__container'>
            <button className={`button__container-btn button__container-btn--${btnText.toLowerCase()}`} {...props} >{btnText}</button>
        </div>
    )
}

export default Button