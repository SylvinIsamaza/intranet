import React from 'react'
import { ReactDOM } from 'react'
import home from './icons/home.jpg'
import peer from './icons/peer.png'
import event from './icons/event.jpg'
import document from './icons/document.png'
import contact from './icons/contact.jpg'

function SidebarIcon(){
    return(
        <div className='sidebar'>
        <button className='sidebaricon'><img
        src={home} alt='home' title='home' className='icon'
        /></button>
         <button className='sidebaricon'><img
        src={event} alt='event' title='event' className='icon'
        /></button>
        <button className='sidebaricon'><img
        src={document} alt='document' title='document' className='icon'
        /></button>
        <button className='sidebaricon'><img
        src={peer} alt='staff' title='staff' className='icon'
        /></button>
        <button className='sidebaricon'><img
        src={contact} alt='contact us' title='contact us' className='icon'
        /></button>
        </div>
    )
}
export default SidebarIcon