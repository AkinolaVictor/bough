import React from 'react'
import './EachMenu.css'

export default function EachMenu(props) {
    return (
        <div onClick = {props.click} className='eachCont'>
            <div className= {`eachContIcon ${props.color}`}>
                <i className={props.figure}></i>
            </div>
            <p>{props.name}</p>
        </div>
    )
}
