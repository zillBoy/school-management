import React from 'react'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'
import PlaceholderImage from '../../assets/placeholder.jpeg'
import AddPlaceholderImage from '../../assets/add.jpg'
import Image from '../Image/Image'
import Button from '../Button/Button'
import Input from '../Input/Input'

const Card = ({ empty, students, setStudents, student, onClick }) => {

    const countHandler = (type) => {

        const studentIndex = students.findIndex(_student => _student.id === student.id)
        const tempStudent = JSON.parse(JSON.stringify(students))

        if (type === 'add') {
            student.count += Number(student.add)
        } else {
            student.count -= Number(student.subtract)
        }

        tempStudent[studentIndex] = student
        setStudents(tempStudent)
    }

    const numChangeHandler = (event, type) => {
        let { value } = event.target

        if (type === 'add') {
            student.add = value
        } else {
            student.subtract = value
        }
    }

    return (
        <div onClick={onClick} className={`card__container card__container--${empty && 'empty'}`}>
            <>
                {empty ? <Image className='addimage' src={AddPlaceholderImage} /> : <>
                <div className='card__iconmain'>
                    <MenuIcon className='card__iconmain-icon' />
                </div>
                <Image src={student.image} />
                <div className='card__heading'>
                    <h2 className='heading-secondary'>{student.name}</h2>
                </div>
                <div className='card__count'>
                    <p className='primary-paragraph'>{student.count}</p>
                </div>
                <div className='card__buttoncontainer'>
                    <Button onClick={() => countHandler('add')} btnText='Add' />
                    <Button onClick={() => countHandler('subtract')} btnText='Subtract' />
                </div>
                <div className='card__inputcontainer'>
                    <Input type='number' defaultValue={student.add} onChange={(event) => numChangeHandler(event, 'add')} /> 
                    <Input type='number' defaultValue={student.subtract} onChange={(event) => numChangeHandler(event, 'subtract')} />
                </div> 
                </>}
            </>
        </div>
    )
}

export default Card