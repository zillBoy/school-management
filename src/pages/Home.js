import React, { useState } from 'react'
import CardList from '../components/CardList/CardList'
import Input from '../components/Input/Input'

const Home = () => {

    const [students, setStudents] = useState([{name: '', image: '', add: 0, subtract: 0}])
    const [name, setName] = useState('')

    return (
        <div className='home__container'>
            <div className='home__inputcontainer'>
                <Input placeholder='Enter student name here' className='search' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='home__cardcontainer'>
                <CardList students={students} setStudents={setStudents} />
            </div>
        </div>
    )
}

export default Home