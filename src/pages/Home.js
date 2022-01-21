import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card'
import { students } from '../utils/mockData' 

const Home = () => {

    // const [students, setStudents] = useState([])

    return (
        <Card student={students[0]} />
    )
}

export default Home