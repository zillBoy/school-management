import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from '../../Button/Button'

import Image from '../../Image/Image'
import Input from '../../Input/Input'
import Modal from '../Modal'

const Student = ({ setModal, student, setStudents }) => {

    const [image, setImage] = useState('')
    const [name, setName] = useState('')

    const addStudentHandler = () => {

        if (name.length === 0) return alert('Please enter student name, , in order to add student')
        else if (image.length === 0) return alert('Please choose student image, in order to add student')

        const student = {
            name,
            image,
            add: 0,
            subtract: 0,
            count: 0
        }

        setStudents(prev => [...prev, student])
        setModal('')
    }

    const cancelHandler = () => setModal('')

    const chooseImageHandler = event => {
        const file = event.target.files[0]
        const url = URL.createObjectURL(file)
        setImage(url)
    }

    return ReactDOM.createPortal((
        <Modal setModal={setModal} heading='Add Student'>
            <Image className='modal' src={image.length !== 0 ? image : null} />
            <div className='modal__container-subcontent'>
                <div className='modal__inputcontiner'>
                    <Input onChange={chooseImageHandler} type='file' className='modalfile'  />
                    <Input onChange={event => setName(event.target.value)} type='text' className='modal' placeholder='Student name' />
                </div>
                <div className='modal__buttoncontainer'>
                    <Button onClick={addStudentHandler} className='modal' btnText='Add' />
                    <Button onClick={cancelHandler} className='modal' btnText='Cancel' />
                </div>
            </div>
        </Modal>
    ), document.getElementById('modal'))
}

export default Student
