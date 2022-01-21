import React from 'react'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'
import PlaceholderImage from '../../assets/placeholder.jpeg'
import Button from '../Button/Button'
import Input from '../Input/Input'

const Card = ({ student }) => {

    console.log('studetn: ', student)

    return (
        <div className='card__container'>
            <div className='card__iconmain'>
                <MenuIcon className='card__iconmain-icon' />
            </div>
            <div className='card__imagediv'>
                <img className='card__imagediv-image' src={PlaceholderImage} alt='student' />
            </div>
            <div className='card__heading'>
                <h2 className='heading-secondary'>Muhammad</h2>
            </div>
            <div className='card__count'>
                <p className='primary-paragraph'>1</p>
            </div>
            <div className='card__buttoncontainer'>
                <Button onClick={() => console.log('btn add called')} btnText='Add' />
                <Button onClick={() => console.log('btn subtract called')} btnText='Subtract' />
            </div>
            <div className='card__inputcontainer'>
                <Input value={1} />
                <Input value={2} />
            </div>
        </div>
    )
}

export default Card