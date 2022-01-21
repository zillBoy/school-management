import React, { useState } from 'react'
import CardList from '../components/CardList/CardList'
import Input from '../components/Input/Input'
import Student from '../components/Modal/Student/Student'

const Home = () => {

    const [students, setStudents] = useState([])
    const [name, setName] = useState('')
    const [modal, setModal] = useState('')

    return (
        <>
            {modal === 'add' ? <Student setModal={setModal} setStudents={setStudents} />
            : modal === 'update' ? <Student setModal={setModal} /> : null}
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