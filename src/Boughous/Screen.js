import React from 'react'
import Desktop from './Desktop/Desktop'
import './Screen.css'

export default function Screen() {
    return (
        <div className='screen'>
            <h1>Screen</h1>
            <div className = 'desktop'>
                <Desktop />

            </div> 
        </div>
    )
}
