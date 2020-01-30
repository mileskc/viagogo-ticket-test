import React from 'react'
import '../style/Events.css'
import Event from './Event'

const FilteredCities = (props) => {
    return(
        <div className = 'events'>
          {props.cities.map(event=> {
          // return(event.LinkTitleText)
          return(
            <Event eventInfo = {event} />)
          })}
        </div>
      )
}

export default FilteredCities