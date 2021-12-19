import React, {createContext, useState} from 'react';
import ImagesContextProvider from './Imagescontext';
import image from './pexels-bess-hamiti-36764.jpg'
import UtilitiesContextProvide, { UtilitiesContext } from './UtilitiesContexts';

export const MainContext = createContext()

export default function MainContextProvider(props) {
    const [name, setName] = useState('You are yet to input a name')
    const background = './pexels-bess-hamiti-36764.jpg'
    const state = {
        image,
        background,
        name,
        setName,
        when: "It's intentional, that all things work together for my good",
        how: 'only God knows all things actually'
    } 
    return (
        <MainContext.Provider value={{...state}}> 
            <ImagesContextProvider>
                <UtilitiesContextProvide>
                    {props.children}
                </UtilitiesContextProvide>
            </ImagesContextProvider>
        </MainContext.Provider>
    )
}
