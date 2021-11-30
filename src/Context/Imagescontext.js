import React, {createContext, useState} from 'react';
import image from "../images/wallpapers/pexels-riccardo-bertolo-4245826.jpg"
import call from "../images/icons/calls.png"
import chats from "../images/icons/chats.png"
import groups from "../images/icons/groups.png"
import apps from "../images/icons/apps.png"
import profiles from "../images/icons/profile.png"
import friends from "../images/icons/friends.png"
import stories from "../images/icons/stories.png"
import posts from "../images/icons/posts.png"


export const ImagesContext = createContext()
export default function ImagesContextProvider(props) {
    
    const navIcons = {call, chats, groups, apps, profiles, friends, stories, posts }

    const logger = () => {
        console.log("here is it")
    }

    // logger()

    // const [name, setName] = useState('You are yet to input a name')
    const state = {
        image,
        ...navIcons,
        logger
    }

    return (
        <ImagesContext.Provider value={{...state}}> 
            {props.children}
        </ImagesContext.Provider>
    )
}
