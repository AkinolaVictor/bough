import React, {createContext, useState} from 'react';

export const UtilitiesContext = createContext()

export default function UtilitiesContextProvide(props) {
        
    /* View in fullscreen */
    function openFullscreen() {
        var elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }
        
        /* Close fullscreen */
    function closeFullscreen() {
        var elem = document.documentElement;
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }

    const state = {
        openFullscreen,
        closeFullscreen
    }

    return (
        <UtilitiesContext.Provider value={{...state}}>
            {props.children}
        </UtilitiesContext.Provider>
    )
}
