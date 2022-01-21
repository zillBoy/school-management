import React, { useState } from 'react'
import Card from '../components/Card/Card'
import CardList from '../components/CardList/CardList'
import Input from '../components/Input/Input'
import Student from '../components/Modal/Student/Student'

const Home = () => {

    const [students, setStudents] = useState([])
    const [studentDetail, setStudentDetail] = useState({})
    const [name, setName] = useState('')
    const [modal, setModal] = useState('')

    return (
        <>
            {modal === 'add' ? <Student setModal={setModal} setDetail={setStudentDetail} />
            : modal === 'update' ? <Student setModal={setModal} detail={studentDetail} setStudentDetail={setStudents} /> : null}
            <div className='home__container'>
                <div className='home__inputcontainer'>
                    <Input placeholder='Enter student name here' className='search' value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className='home__cardcontainer'>
                    <CardList students={students} setStudents={setStudents} setModal={setModal} />
                </div>
            </div>
        </>
    )
}

export default Home