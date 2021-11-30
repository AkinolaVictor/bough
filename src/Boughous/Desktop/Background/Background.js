// import React from 'react'
import './background.css';
import React, {useContext} from 'react'
import {ImagesContext} from "../../../Context/Imagescontext"

function Background() {
  const {image} = useContext(ImagesContext)
  return (
    <div className="backgroundImageDiv">
        <img src={image} width="100%" height="100%" alt="" />
    </div>
  );
}

export default Background;
