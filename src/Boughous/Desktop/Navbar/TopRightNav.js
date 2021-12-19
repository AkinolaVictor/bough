import React from 'react'
import './styles/topRightNav.css'

export default function TopRightNav() {
    return (
        <div className = 'rightFuncs'>

            <div className='eachContent'>
                <i class="fas fa-dice-d6"></i>
                <div>
                    <h4>Form</h4>
                    <ul>
                        <li>Operating system</li>
                        <li>Website--only Boughous</li>
                    </ul>
                </div>
            </div>

            <div className='eachContent'>
                <i class="fas fa-user-circle"></i>
                <div>account</div>
            </div>

            <div className='eachContent'>
                <i class="fas fa-wifi"></i>
                <div>content 2</div>
            </div>

            <div className='eachContent'>
                <i class="fas fa-bell"></i>
                <div>content 3</div>
            </div>

            <div className='eachContent'>
                <i class="fas fa-cog"></i> 
                <div>content 4</div>
            </div>

            <div className='eachContent'>
                {/* <i class="fas fa-cog"></i>  */}
                <p>{'4:38pm'}</p>
            </div>
        </div>
    )
}
