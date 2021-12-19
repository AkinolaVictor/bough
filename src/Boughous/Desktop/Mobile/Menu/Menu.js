import React, {useContext} from 'react';
import './menu.css';
import { ImagesContext } from '../../../../Context/Imagescontext';
import EachNav from '../../Navbar/EachNav';
import EachMenu from './EachMenu';

export default function Menu() {
    const {call, chats, groups, apps, profiles, friends, stories, posts} = useContext(ImagesContext)

    const toggleMenu = () => {
        const menuIconz = document.querySelector('.menuIconz')
        menuIconz.classList.toggle('hide')

        const menuContent = document.querySelector('.menuContent')
        menuContent.classList.toggle('hide')
    }

    return (

        <div className = 'menuContainer'>
            <div onClick={toggleMenu} className='menuIconz'>
                <i className="fas fa-bars"></i>
            </div>

            <div className='menuContent hide'>
                <EachMenu click = {toggleMenu} 
                    name={'post'}
                    figure = {"far fa-edit"} 
                    color = {'color1'}/>

                <EachMenu click = {toggleMenu} 
                    name={'profile'}
                    figure = {"fas fa-user-circle"} 
                    color = {'color2'}/>

                <EachMenu click = {toggleMenu} 
                    name={'chats'}
                    figure = {"fas fa-comments"} 
                    color = {'default'}/>

                <EachMenu click = {toggleMenu} 
                    name={'groups'}
                    figure = {"fas fa-users"} 
                    color = {'color4'}/>

                <EachMenu click = {toggleMenu} 
                    name={'friends'}
                    figure = {"fas fa-user-friends"} 
                    color = {'color5'}/>

                <EachMenu click = {toggleMenu} 
                    name={'calls'}
                    figure = {"fas fa-phone-alt"} 
                    color = {'color6'}/>

                <EachMenu click = {toggleMenu} 
                    name={'apps'}
                    figure = {"fas fa-th"} 
                    figure2 = {"fas fa-th-large"} 
                    color = {'color7'}/>

                <EachMenu click = {toggleMenu} 
                    name={'stories'}
                    figure = {"fas fa-book-open"} 
                    color = {'color8'}/>


            </div>
        </div>
    )
}
