import React from 'react'
import '../style/Event.css'

const Event = (props) => {
  return (
    <div className = 'event'>
			<div className = 'dateInfo'>
				<h5>{props.eventInfo.Day} {props.eventInfo.Time}</h5>
				<h4>{props.eventInfo.Date}</h4>
			</div>
			<hr/>
			<div className= 'venueInfo'>
				<h4 className = "venueCity">{props.eventInfo.VenueCity}</h4>
				<h5>{props.eventInfo.VenueName}</h5>
			</div>
			<div className = 'price'>
			<div className = 'priceInfo'>
				<h5>Tickets starting at {props.eventInfo.MinPrice}</h5>
				{/* See note in Readme about below button */}
				<a target = "_blank" href={`https://viagogo.com${props.eventInfo.EventUrl}`}><button className = 'buy'>Buy Tickets</button></a>
			</div>
			</div>
    </div>
  )
}

export default Event