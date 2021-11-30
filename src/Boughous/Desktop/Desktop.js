// import React from 'react'
import React, {useContext} from 'react';
import Background from './Background/Background'
import './Desktop.css'
import { MainContext } from '../../Context/Maincontext'
import Navbar from './Navbar/Navbar';


export default function Desktop() {
    
    // const {when} = useContext(MainContext)
    return (
        <div className = "desktop">
            {/* z-index of 1 */}
            <div className='topNav'>
                
            </div>

            {/* z-index of 0*/}
            <div className = 'background'>
                <Background />
            </div>

            {/* z-index of 2 */}
            <div className = 'bottomNav'>
                <Navbar/>
                {/* <p>{when}</p> */}
            </div>
            
        </div>
    )
}
