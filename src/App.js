import React, { Component } from 'react'
import './App.css'


export class App extends Component {

  fetchAPI = () => {
    const apiKey = process.env.REACT_APP_API_KEY
    let state = 'TX'
    let activity = 'Guided Tours'
    let park = 'pais'
    //fetch all parks
    //fetch(`https://developer.nps.gov/api/v1/parks?api_key=${apiKey}&limit=500`)

    //fetch parks by state 
    //fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${state}=&api_key=${apiKey}`)


    //fetch parks by activity
    //fetch(`https://developer.nps.gov/api/v1/activities/parks?q=${activity}=&api_key=${apiKey}&limit=500`)

    //fetch campground by state
    //fetch(`https://developer.nps.gov/api/v1/campgrounds?stateCode=${state}=&api_key=${apiKey}&limit=500`)

    //fetch campground by park code
    fetch(`https://developer.nps.gov/api/v1/campgrounds?parkCode=${park}=&api_key=${apiKey}&limit=500`)

    .then(response => response.json())
    .then(console.log)
  }

  render() {
    return (
      <div>
        {this.fetchAPI()}
      </div>
    )
  }
}

export default App
