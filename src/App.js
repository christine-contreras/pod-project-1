import React, { Component } from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import ParksContainer from './Components/ParksContainer'
const apiKey = process.env.REACT_APP_API_KEY

export class App extends Component {

  constructor(){
    super()
    this.state = {
      selectedParks: [],
      selectedState: "",
      defaultParks: []
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
      <div>
        <Nav />
        <Hero fetchingParks={this.fetchAPI} />

        <ParksContainer 
        parkState={this.state.selectedState} 
        parks={this.state.selectedParks.length !== 0 ? this.state.selectedParks : this.state.defaultParks}/>
        
        
      </div>
    )
  }
}

export default App
