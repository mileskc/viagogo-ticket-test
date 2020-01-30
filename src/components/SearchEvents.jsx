import React from 'react'
import json from '../data'
import Event from './Event'
import '../style/Events.css'

class SearchEvents extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			cities: json.Items,
			searchedCities: json.Items
		}
	}



	handleChange = (e) => {
		let currentList = json.Items
		let newList = []
		if(e.target.value !== '') {
			newList = currentList.filter(concert=>{
				const eventLC = concert.VenueCity.toLowerCase()
				const searchedCityLC = e.target.value.toLowerCase()
				return eventLC.includes(searchedCityLC)
			})
		} else {
			newList = json.Items
		}
		this.setState({
			searchedCities: newList
		})
	}	

	render() {
		return(
			<div>
				<div className = "searchContainer">
					<input className = 'searchBar' type="text" onChange={this.handleChange}placeholder="Type a City"/>
				</div>
				<div className='events'>
					{this.state.searchedCities.map(event=> {
					return(
						<Event eventInfo = {event} />)
					})}
				</div>
			</div>
		)
	}
}

export default SearchEvents