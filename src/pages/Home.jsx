import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList/CardList'
import Input from '../components/Input/Input'
import Student from '../components/Modal/Student/Student'

const Home = () => {

    const [students, setStudents] = useState([])
    const [filteredStudents, setFilteredStudents] = useState([])
    const [name, setName] = useState('')
    const [modal, setModal] = useState('')
    const [modalData, setModalData] = useState({})

    const filterStudentsHandler = (value, students) => {
        const updatedData = students.filter(student => student.name.toLowerCase().includes(value.toLowerCase()) || student.name.toLowerCase().startsWith(value.toLowerCase()))
        setFilteredStudents(updatedData)
    }

    useEffect(() => {
        if (name.length === 0) setFilteredStudents(students)
        else filterStudentsHandler(name, students)
    }, [name])

    useEffect(() => {
        setFilteredStudents(students)
    }, [students])

    return (
        <>
            {modal === 'add' ? <Student setModal={setModal} students={students} setStudents={setStudents} />
            : modal === 'update' ? <Student student={modalData} students={students} setStudents={setStudents} setModal={setModal} /> : null}
            <div className='home__container'>
                <div className='home__inputcontainer'>
                    <Input placeholder='Enter student name here' className='search' value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className='home__cardcontainer'>
                    <CardList students={filteredStudents} setStudents={setStudents} setModal={setModal} setModalData={setModalData} />
                </div>
            </div>
        </>
    )
}

export default Home