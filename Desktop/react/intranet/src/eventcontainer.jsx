import React from 'react'
import { ReactDOM } from 'react'
import './index.css'
function EventContainer(pros){
    return(
<div className='eventContainer'>
    <div className='title'>
<h4>{pros.type}</h4>
<h4>{pros.date}</h4></div>
<p>{pros.description}</p>
<button>see analytic</button>
</div>)
}
export default EventContainer