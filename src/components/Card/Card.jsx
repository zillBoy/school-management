import React from 'react'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'
import PlaceholderImage from '../../assets/placeholder.jpeg'
import AddPlaceholderImage from '../../assets/add.jpg'
import Image from '../Image/Image'
import Button from '../Button/Button'
import Input from '../Input/Input'

const Card = ({ empty, student, onClick }) => {

    return (
        <div onClick={onClick} className={`card__container card__container--${empty && 'empty'}`}>
            <>
                {empty ? <Image className='addimage' src={AddPlaceholderImage} /> : <>
                <div className='card__iconmain'>
                    <MenuIcon className='card__iconmain-icon' />
                </div>
                <Image src={PlaceholderImage} />
                <div className='card__heading'>
                    <h2 className='heading-secondary'>{student.name}</h2>
                </div>
                <div className='card__count'>
                    <p className='primary-paragraph'>{student.count}</p>
                </div>
                <div className='card__buttoncontainer'>
                    <Button onClick={() => console.log('btn add called')} btnText='Add' />
                    <Button onClick={() => console.log('btn subtract called')} btnText='Subtract' />
                </div>
                <div className='card__inputcontainer'>
                    <Input value={student.add} />
                    <Input value={student.subtract} />
                </div> 
                </>}
            </>
        </div>
    )
}

export default Card