import React from 'react'
import PlaceholderImage from '../../assets/placeholder.jpeg'

const Image = ({ className='', src }) => {

    return (
        <div className='image__container'>
            <img 
                className={`${className.length !== 0 ? `image__container-${className}` : `image__container-image`}`} 
                src={src === null ? PlaceholderImage : src}
                alt='student' 
            />
        </div>
    )
}

export default Image