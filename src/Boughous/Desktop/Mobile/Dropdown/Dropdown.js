import React, {useContext, useState} from 'react';
import './Dropdown.css'
import { UtilitiesContext } from '../../../../Context/UtilitiesContexts'
import Page1List from './Page1List';
import Page2Grid from './Page2Grid';

export default function Dropdown() {

    return (
        <div className = 'dropdown hide'>
                <h4>Boughous</h4>

                <div className = 'dropdownLine'></div>

                <div className = 'dropdownoptions'> 

                    <div className = 'page1'>
                        <Page1List />
                    </div>

                    <div className = 'page2'>
                        <Page2Grid />
                        {/* <Page2Grid />
                        <Page2Grid /> */}
                    </div>
                </div>

            
            <div className = 'dots'>
                <div className = 'dot'>
                    
                </div>

                <div className = 'dot dotWhite'>
                    
                </div>
            </div>
        </div>
    )
}
