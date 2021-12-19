import React, {useContext} from 'react';
import { ImagesContext } from '../../../../Context/Imagescontext';
import './background.css'

export default function BackgroundM() {
    const {mobileImage} = useContext(ImagesContext)
    return (
        <div className = 'wallPaperContainer'>
            <img src={mobileImage} width="100%" height="100%" alt="" />
        </div>
    )
}
