import React from 'react'
import { ReactComponent as CancelIcon } from '../../assets/cancel.svg'

const Modal = ({ heading, children, setModal }) => {
    return (
        <div className='modal__container'>
            <div className='modal__container-content'>
                <div className='modal__header'>
                    <h2 className='heading-secondary modal__header-heading'>{heading}</h2>
                    <CancelIcon onClick={() => setModal('')} />
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal