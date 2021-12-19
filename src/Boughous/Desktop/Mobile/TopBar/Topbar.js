import React from 'react'
import './topbar.css'

export default function Topbar() {

    const showDropDown = (e)=>{
      e.stopPropagation();

      // show dropdown
      const dropdown = document.querySelector('.dropdown');
      dropdown.classList.toggle('hide')
      
      // change botton
      const dropdownMenu =  document.querySelector('.dropdownMenu');
      dropdownMenu.classList.toggle('hide')

      const closeDropdown =  document.querySelector('.closeDropdown');
      closeDropdown.classList.toggle('hide')
    }

    const collapseDropDown = (e)=>{
      e.stopPropagation();

      // show dropdown
      const dropdown = document.querySelector('.dropdown');
      dropdown.classList.toggle('hide')
      
      // change botton
      const dropdownMenu =  document.querySelector('.dropdownMenu');
      dropdownMenu.classList.toggle('hide')

      const closeDropdown =  document.querySelector('.closeDropdown');
      closeDropdown.classList.toggle('hide')
    }
    
    return (
        <React.Fragment>
            <div className='logo'> B </div>

            <div className='dropdownFunctions'>
                {/* <p>close</p> */}
                <i onClick = {showDropDown} className="fas fa-caret-down dropdownMenu"></i>
                <i onClick = {collapseDropDown} className="fas fa-times closeDropdown hide"></i>
            </div>
        </React.Fragment>
    )
}
