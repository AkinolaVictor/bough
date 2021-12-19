import React, {useContext, useState} from 'react';
import { UtilitiesContext } from '../../../../Context/UtilitiesContexts'


export default function Page2Grid() {
    const { openFullscreen, closeFullscreen } = useContext(UtilitiesContext);

    const [fullscreenOn, setFullscreenOn] = useState(false);

    const screenFunc1 = () => {
        openFullscreen();
        setFullscreenOn(!fullscreenOn)
    }
    const screenFunc2 = () => {
        closeFullscreen()
        setFullscreenOn(!fullscreenOn)
    }
    return (
        <React.Fragment>
            <div className='eachGrid'>
                <i className="fas fa-user-circle anIcon"></i>
                <p>account</p>
            </div>
            <div className='eachGrid'>
                <i className="fas fa-wifi anIcon"></i>
                <p>connection</p>
            </div>
            <div className='eachGrid'>
                <i className="fas fa-bell anIcon"></i>
                <p>notification</p>
            </div>
            <div className='eachGrid'>
                <i className="fas fa-cog anIcon"></i> 
                <p>settings</p>
            </div>
            <div className='eachGrid'>
                <i className="fas fa-dice-d6 anIcon"></i> 
                <p>mode</p>
            </div>

            {
                fullscreenOn?
                <div onClick = {screenFunc2} className='eachGrid'>
                    <i className="fas fa-expand anIcon"></i>
                    <p>close fullscreen</p>
                </div>:
                <div onClick = {screenFunc1} className='eachGrid'>
                    <i className="fas fa-expand anIcon"></i>
                    <p>fullscreen</p>
                </div>
            }
        </React.Fragment>
    )
}
