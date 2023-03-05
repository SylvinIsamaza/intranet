import React from 'react'
import { ReactDOM } from 'react'
import home from './icons/home.jpg'
import edit from './icons/edit.png'
import event from './icons/event.jpg'
import remove from './icons/remove.png'
import contact from './icons/contact.jpg'

function Member(pros){
    return(
        <div className='member'>
            
             <button className='sidebaricon'><img
        src={pros.profile} alt={pros.alt} title={pros.name} className='icon'
        /></button>
      <h3>Admin</h3> 
      <button className='edit' ><img
        src={edit} alt='edit' title='edit' 
        /></button> 
         <button className='remove' ><img
        src={remove} alt='remove' title='remove' 
        /></button> 
        </div>
    )
}
export default Member