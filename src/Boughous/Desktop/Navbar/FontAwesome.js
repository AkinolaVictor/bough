import React from 'react'
import './fontawesome.css'

export default function FontAwesome(props) {
    return (
        <div className = 'fontAwe'>
            <div className = 'fontAwesome2'>
                <i className = {`${props.class} fontAwesomem`}></i>
            </div>

            <p className= 'iconName fade-in'> {props.name} </p>
        </div>
    )
}
