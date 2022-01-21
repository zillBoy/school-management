import React from 'react'
import Card from '../Card/Card'

const CardList = ({ students, setStudents, setModal, setModalData }) => {
    return (
        <div className='cardlist__container'>
            {students.map(student => <Card key={student.id} students={students} setStudents={setStudents} student={student} setModal={setModal} setModalData={setModalData} />)}
            <Card onClick={() => setModal('add')} empty={true} />
        </div>
    )
}

export default CardList