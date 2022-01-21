import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../../Button/Button'

import Image from '../../Image/Image'
import Input from '../../Input/Input'
import Modal from '../Modal'

const Student = ({ setModal, student }) => {

    return ReactDOM.createPortal((
        <Modal setModal={setModal} heading='Add Student'>
            <Image src={student?.image} />
            <div className='modal__container-subcontent'>
                <div className='modal__inputcontiner'>
                    <Input type='file' className='modalfile'  />
                    <Input type='text' className='modal' placeholder='Student name' />
                </div>
                <div className='modal__buttoncontainer'>
                    <Button className='modal' btnText='Add' />
                    <Button className='modal' btnText='Cancel' />
                </div>
            </div>
        </Modal>
    ), document.getElementById('modal'))
}

export default Student
