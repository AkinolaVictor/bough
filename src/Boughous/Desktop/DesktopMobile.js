import React from 'react';
import './DesktopMobile.css'
import BackgroundM from './Mobile/Background/BackgroundM';
import BottomOptions from './Mobile/BottomOptions/BottomOptions';
import Dropdown from './Mobile/Dropdown/Dropdown';
import Menu from './Mobile/Menu/Menu';
import Topbar from './Mobile/TopBar/Topbar';

export default function DesktopMobile() {

    return (
        <div className = 'desktopMobile'>
            {/* Background Wallpaper with z-index = 1*/}
            <div className = 'backgroundMobile'>
                <BackgroundM />
            </div>

            {/* z-index = 2 */}
            <div className = 'up'>
              <Topbar />
            </div>

            {/* z-index = 3 but supposed to be "x", that is the Apex */}
            <div className='topDropDown'>
                <Dropdown />
            </div>


            {/* All work goes here */}


            <div className='menu'>
              <Menu />
            </div>


            {/* z-index = 2 but supposed to be "x" or "x-1", that is the Apex */}
            <div className = 'down'>
                <BottomOptions />
            </div>
        </div>
    )
}
