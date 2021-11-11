import React from 'react'
import '../App.css'
import Main  from './Main'
import Sidebar from './Sidebar'

function Container() {
    return (
        <div className='container'>
                <Sidebar />
                <Main />
        </div>
    )
}

export default Container
