import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../Modal'

const Student = ({ setModal }) => {
    return ReactDOM.createPortal((
        <Modal setModal={setModal} heading='Add Student'>
            <p>This is the heading</p>
        </Modal>
    ), document.getElementById('modal'))
}

export default Student
