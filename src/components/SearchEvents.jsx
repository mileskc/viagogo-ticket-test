import React from 'react'
import json from '../data'
import Event from './Event'
// import FilteredCities from './FilteredCities'
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
		// e.preventDefault()
		console.log('clicked')
		console.log(e.target.value)
		let currentList = json.Items
		console.log(currentList)
		let newList = []
		if(e.target.value !== '') {
			newList = currentList.filter(concert=>{
				const eventLC = concert.VenueCity.toLowerCase()
				const searchedCityLC = e.target.value.toLowerCase()
				console.log(concert)
				// return concert.includes(e.target.value)
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
				{/* <button>Search</button> */}
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