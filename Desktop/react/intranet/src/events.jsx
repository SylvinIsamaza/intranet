import './index.css';
import EventContainer from './eventcontainer';

import home from './icons/home.jpg'
function Events(){
    return(
    <div className="eventcollection">
        <h1>Events</h1>
            <select name="status" placeholder='upcoming'>
        <option value="upcoming">upcoming</option>
                <option value="ended">ended</option>
            </select>
            <input type="date" />
          
                <select name="type" id="">
                <option value="upcoming">upcoming</option>
                <option value="ended">ended</option>
            </select>
            <input type="text" placeholder='Place' />
            <input type="button"  value={"set event"} id="set"/>
            <div className="flexbox">
             <EventContainer/>
             <EventContainer/>
             <EventContainer/>
             <EventContainer/>
             </div>
             <div className="flexbox flexbox2">
             <EventContainer/>
             <EventContainer/>
             <EventContainer/>
             <EventContainer/>
             </div>
            </div>
            )
}
export default Events