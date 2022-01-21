import React from 'react'
import Card from '../Card/Card'

const CardList = ({ students, setModal }) => {
    return (
        <div className='cardlist__container'>
            {students.map(student => <Card student={student} setModal={setModal} />)}
            <Card onClick={() => setModal('add')} empty={true} />
        </div>
    )
}

export default CardList