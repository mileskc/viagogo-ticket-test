import React from 'react'
import json from '../data'
// import Events from './Event'
import FilteredCities from './FilteredCities'

class FilterEvents extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			city: '',
			cities: json.Items,
			filteredCities: json.Items
		}
	}

	handleClick = (e) => {
		// e.preventDefault()
		console.log('clicked')
		console.log(e.target.value)
		let val = e.target.value
		this.setState({
			city: val}, ()=>this.filterCities()
		)
		
		// this.filterCities()
	}	

	filterCities = () => {
		console.log(this.state.city)
		let filteredCities = this.state.cities && this.state.cities
		let filteredCities2 = filteredCities && filteredCities.filter((city) => {
			// let cityName = city.VenueCity
			// if (cityName === this.state.city) {
			// 	return city
			// }
			return city.VenueCity === this.state.city
    
		})
		this.setState({
      filteredCities:filteredCities2
		})
		console.log(this.state.filteredCities)
	}

	showAllCities = () => {
		this.setState({
			filteredCities:json.Items
		})
	}

	render() {
		return(
			<div className = "filterEvents">
				<h2>Select a City</h2>
				<div className = 'cityButtons'>
					{json.Items.map(concert=> {
						return(<button className = 'city' onClick={this.handleClick} value={concert.VenueCity}>{concert.VenueCity}</button>)
					})}
					<button id = "allCitiesButton" className = 'city' onClick={this.showAllCities}>All Cities</button>
				</div>
				<FilteredCities cities={this.state.filteredCities} />
			</div>
		)
	}

}

export default FilterEvents