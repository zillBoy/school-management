import React from 'react'

const Image = ({ className='', src }) => {
    return (
        <div className='image__container'>
            <img className={`${className.length !== 0 ? `image__container-${className}` : `image__container-image`}`} src={src} alt='student' />
        </div>
    )
}

export default Image