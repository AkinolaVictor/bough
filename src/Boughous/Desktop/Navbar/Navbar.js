// import React from 'react'
import EachNav from './EachNav'
import './nav.css'
import React, {useContext} from 'react'
import { ImagesContext } from '../../../Context/Imagescontext'
import FontAwesome from './FontAwesome'

export default function Navbar(props) {
    const {call, chats, groups, apps, profiles, friends, stories, posts} = useContext(ImagesContext)
    return (
        <div className='allNav'>
            {/* <h5>{props.values}</h5> */}
            {/* <EachNav class = {'fa-solid fa-phone'}/> */}
            <EachNav icon = {posts} name = {'Posts'}/>
            <EachNav icon = {profiles} name = {'Profiles'}/>
            <EachNav icon = {chats} name = {'Chats'}/>
            <EachNav icon = {groups} name = {'Groups'}/>
            <EachNav icon = {stories} name = {'Stories'}/>
            <EachNav icon = {friends} name = {'Friends'}/>
            <EachNav icon = {call} name = {'Calls'}/>
            <EachNav icon = {apps} name = {'Apps'}/>
        </div>
    )
}
