import React from 'react'

const Button = ({ className, btnText, ...props }) => {
    return (
        <div className='button__container'>
            <button className={`button__container-btn button__container-btn--${btnText.toLowerCase()} button__container-btn--${className}`} {...props} >{btnText}</button>
        </div>
    )
}

export default Button