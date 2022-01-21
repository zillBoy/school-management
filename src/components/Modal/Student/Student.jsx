import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Button from '../../Button/Button'

import Image from '../../Image/Image'
import Input from '../../Input/Input'
import Modal from '../Modal'

const Student = ({ setModal, student, students, setStudents }) => {

    const [image, setImage] = useState('')
    const [name, setName] = useState('')

    const addStudentHandler = () => {

        if (name.length === 0) return alert('Please enter student name, , in order to add student')
        else if (image.length === 0) return alert('Please choose student image, in order to add student')

        const student = {
            id: students.length + 1,
            name,
            image,
            add: 0,
            subtract: 0,
            count: 0
        }

        setStudents(prev => [...prev, student])
        setModal('')
    }

    const updateStudentHandler = () => {
        if (name.length === 0) return alert('Please enter student name, , in order to add student')
        else if (image.length === 0) return alert('Please choose student image, in order to add student')

        const studentData = {
            id: students.length + 1,
            name,
            image,
            add: student.add,
            subtract: student.subtract,
            count: student.count,
        }

        const studentIndex = students.findIndex(_student => _student.id === student.id)
        const tempStudent = [...students]

        tempStudent[studentIndex] = studentData

        setStudents(tempStudent)
        setModal('')
    }

    const cancelHandler = () => setModal('')

    const chooseImageHandler = event => {
        const file = event.target.files[0]
        const url = URL.createObjectURL(file)
        setImage(url)
    }

    useEffect(() => {
        if (student !== undefined) {
            setImage(student.image)
            setName(student.name)
        }
    }, [])

    return ReactDOM.createPortal((
        <Modal setModal={setModal} heading={`${student !== undefined ? 'Update' : 'Add'} Student`}>
            <Image className='modal' src={image.length !== 0 ? image : null} />
            <div className='modal__container-subcontent'>
                <div className='modal__inputcontiner'>
                    <Input onChange={chooseImageHandler} type='file' className='modalfile'  />
                    <Input defaultValue={name} onChange={event => setName(event.target.value)} type='text' className='modal' placeholder='Student name' />
                </div>
                <div className='modal__buttoncontainer'>
                    {
                        student !== undefined 
                        ? <Button onClick={updateStudentHandler} className='modal' btnText='Update' />
                        : <Button onClick={addStudentHandler} className='modal' btnText='Add' />
                    }
                    <Button onClick={cancelHandler} className='modal' btnText='Cancel' />
                </div>
            </div>
        </Modal>
    ), document.getElementById('modal'))
}

export default Student
