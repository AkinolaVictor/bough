// import React from 'react'
import EachNav from './EachNav'
import './styles/nav.css'
import React, {useContext} from 'react'
import { ImagesContext } from '../../../Context/Imagescontext'
import FontAwesome from './FontAwesome'

export default function Navbar(props) {
    const {call, chats, groups, apps, profiles, friends, stories, posts} = useContext(ImagesContext)
    return (
        <div className='allNav'>
            {/* <h5>{props.values}</h5> */}
            {/* <EachNav class = {'fa-solid fa-phone'}/> */}
            <EachNav icon = {posts} name = {'posts'}/>
            <EachNav icon = {profiles} name = {'profiles'}/>
            <EachNav icon = {chats} name = {'chats'}/>
            <EachNav icon = {groups} name = {'groups'}/>
            <EachNav icon = {stories} name = {'stories'}/>
            <EachNav icon = {friends} name = {'friends'}/>
            <EachNav icon = {call} name = {'calls'}/>
            <EachNav icon = {apps} name = {'apps'}/>
        </div>
    )
}
