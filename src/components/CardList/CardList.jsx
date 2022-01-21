import React from 'react'
import Card from '../Card/Card'

const CardList = ({ students }) => {
    return (
        <div className='cardlist__container'>
            {students.map(student => <Card student={student} />)}
        </div>
    )
}

export default CardList