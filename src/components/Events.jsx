import React from 'react'
import json from '../data'
import Event from './Event'
import '../style/Events.css'

const Events = () => {
  return(
    <div className = 'events'>
      {console.log(json.Items)}
      {json.Items.map(event=> {
      // return(event.LinkTitleText)
      return(
				<Event eventInfo = {event} />)
      })}
    </div>
  )
}

export default Events