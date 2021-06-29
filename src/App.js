import React, { Component } from 'react'
import Nav from './Components/Nav'
import Home from './Containers/Home'
import SavedParks from './Containers/SavedParks'

import { BrowserRouter as Router, Route } from 'react-router-dom';
const apiKey = process.env.REACT_APP_API_KEY

export class App extends Component {
  constructor(){
    super()
    this.state = {
      selectedParks: [],
      selectedState: "",
      defaultParks: [],
      savedParks: []
    }
  }

  fetchAPI = (stateAbbr = null) => {
    let park = 'pais'
    //fetch campground by park code
    //fetch(`https://developer.nps.gov/api/v1/campgrounds?parkCode=${park}=&api_key=${apiKey}&limit=500`)


    //fetch parks by state 
    fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateAbbr}=&api_key=${apiKey}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        selectedParks: json.data,
        selectedState: stateAbbr
      })

    })
  }

  handleSavedParks = (newPark) => {
    this.setState(previousState => ({savedParks:[...previousState.savedParks, newPark]}))
  }

  handleUnsavePark = (removePark) => {
    const newSavedParks = this.state.savedParks.filter(park => park !== removePark)

    this.setState({savedParks: newSavedParks})
  }

  componentDidMount() {
    //fetch parks by state 
    fetch(`https://developer.nps.gov/api/v1/parks?api_key=${apiKey}&limit=50`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      const newArray = []
      for(let i = 0; i < 4; i++) {
          newArray.push(json.data[Math.floor(Math.random()*json.data.length)])
      }
      this.setState({
        defaultParks: newArray,
      })

    })
  }




  render() {
    return (
      <Router>
        <div>
        <Nav />
        <Route exact path="/"
        render={(routerProps) => <Home
        {...routerProps}
        title="National Parks"
        fetchingParks={this.fetchAPI}
        parkState={this.state.selectedState}
        handleParks={this.handleSavedParks}
        parks={this.state.selectedParks.length !== 0 ? this.state.selectedParks : this.state.defaultParks}/>} 
        
        />

        <Route exact path="/saved"
        render={(routerProps) => <SavedParks
        {...routerProps}
        title="Saved Parks"
        savedParks={this.state.savedParks}
        handleParks={this.handleUnsavePark}/>}/>
       </div>
      </Router>
    )
  }
}

export default App
