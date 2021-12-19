import React from 'react'
import './styles/topLeftNav.css'

export default function TopLeftNav() {
    return (

        <div className= 'leftFuncs'>
            <div className='logo'> B </div>
            <div style={{marginLeft: 15+'px'}} className='topnavContent'>
                <p >Menu</p>
                <div className='content'>
                    menu info
                </div>
            </div>

            <div className='topnavContent'>
                <p>Search</p>
                <div className='content'>
                    <p>Search info</p>
                    <p>Search info</p>
                    <p>Search info</p>
                    <p>Search info</p>
                    <p>Search info</p>
                    <p>Search info</p>
                </div>
            </div>
            <div className='topnavContent'>
                <p>Files</p>
                <div className='content'>
                    files info
                </div>
            </div>

            <div className='topnavContent'>
                <p >Language</p>
                <div className='content'>
                    language info
                </div>
            </div>
            <div className='topnavContent'>
                <p>About</p>
                <div className='content'>
                    About info
                </div>
            </div>
            <div className='topnavContent'>
                <p>Help</p>
                <div className='content'>
                    Help info
                </div>
            </div>
        </div>
    )
}
