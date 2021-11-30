import React from 'react'
import './eachNav.css'

export default function EachNav(props) {
    return (
        <div className =  {`${props.iconBg} eachnav`}>
            {/* <i class="fa-solid fa-phone"></i> */}
            {/* <p>{props.name}</p> */}
            <img src= {props.icon} alt="" className='imageIcon'/>
                
            {/* <i className = {`${props.class} fontAwesome`}></i> */}
            <p className= 'iconName fade-in'> {props.name} </p>
        </div>
    )
}
