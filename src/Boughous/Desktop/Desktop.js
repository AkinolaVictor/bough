// import React from 'react'
import React, {useContext} from 'react';
import Background from './Background/Background'
import './Desktop.css'
import { MainContext } from '../../Context/Maincontext'
import Navbar from './Navbar/Navbar';
import TopLeftNav from './Navbar/TopLeftNav';
import TopRightNav from './Navbar/TopRightNav';


export default function Desktop() {
    
    // const {when} = useContext(MainContext)
    return (
        <div className = "desktop">
            {/* z-index of 1 */}
            <div className='topNav'>

                <TopLeftNav />
                
                <TopRightNav />
            </div>

            {/* z-index of 0*/}
            <div className = 'background'>
                <Background />
            </div>

            <div className = 'taskbar'>
                
            </div>

            {/* z-index of 1 */}
            <div className = 'bottomNav'>
                <Navbar/>
                {/* <p>{when}</p> */}
            </div>

            
        </div>
    )
}
