import React, { Component } from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import ParksContainer from './Components/ParksContainer'

export class App extends Component {

  constructor(){
    super()
    this.state = {
      selectedParks: []
    }
  }

  fetchAPI = (stateAbbr) => {
    const apiKey = process.env.REACT_APP_API_KEY
    let activity = 'Guided Tours'
    let park = 'pais'
    //fetch all parks
    //fetch(`https://developer.nps.gov/api/v1/parks?api_key=${apiKey}&limit=500`)

    //fetch parks by state 
    fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateAbbr}=&api_key=${apiKey}`)

    //fetch campground by state
    //fetch(`https://developer.nps.gov/api/v1/campgrounds?stateCode=${state}=&api_key=${apiKey}&limit=500`)

    //fetch campground by park code
    //fetch(`https://developer.nps.gov/api/v1/campgrounds?parkCode=${park}=&api_key=${apiKey}&limit=500`)

    .then(response => response.json())
    .then(json => {

      this.setState({
        selectedParks: json
      })

    })
  }

  render() {
    return (
      <div>
        <Nav />
        <Hero fetchingParks={this.fetchAPI} />
        <ParksContainer parks={this.state.selectedParks}/>
      </div>
    )
  }
}

export default App
