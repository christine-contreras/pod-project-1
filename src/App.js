import React, { Component } from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import ParksContainer from './Components/ParksContainer'

export class App extends Component {

  constructor(){
    super()
    this.state = {
      selectedParks: [],
      selectedState: ""
    }
  }

  fetchAPI = (stateAbbr) => {
    const apiKey = process.env.REACT_APP_API_KEY
    let park = 'pais'

    //fetch parks by state 
    fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateAbbr}=&api_key=${apiKey}`)

    //fetch campground by state
    //fetch(`https://developer.nps.gov/api/v1/campgrounds?stateCode=${state}=&api_key=${apiKey}&limit=500`)

    //fetch campground by park code
    //fetch(`https://developer.nps.gov/api/v1/campgrounds?parkCode=${park}=&api_key=${apiKey}&limit=500`)

    .then(response => response.json())
    .then(json => {

      this.setState({
        selectedParks: json.data,
        selectedState: stateAbbr
      })

    })
  }

  render() {
    return (
      <div>
        <Nav />
        <Hero fetchingParks={this.fetchAPI} />
        <ParksContainer parkState={this.state.selectedState} parks={this.state.selectedParks}/>
      </div>
    )
  }
}

export default App
