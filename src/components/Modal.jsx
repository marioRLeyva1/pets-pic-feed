import React from 'react'
import AppContext from '../context/AppContext'

const Modal = (props) => {
    const {setOpenModal} = React.useContext(AppContext);
    const onClick = () => {
        setOpenModal(false);
    }
  return (
    <div className='fixed flex justify-center items-center z-50 w-screen h-screen bg-black bg-opacity-80'>
        <div className='rounded-2xl p-6 flex flex-col h-max justify-center border-4 border-slate-500 gap-4 bg-white shadow-md'>
            <h1 className='text-center text-3xl text-red-600'>{props.title}</h1>
            <p className='text-center py-4'>{props.msg}</p>
            <button className='border-2 border-blue-500 p-2 rounded-2xl bg-blue-400 hover:bg-blue-300 text-white text-lg font-bold hover:scale-105 transition' onClick={onClick}>Ok!</button>
        </div>
    </div>
  )
}

export default Modal