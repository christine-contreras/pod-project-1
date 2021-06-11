import React, { Component } from 'react'
import './App.css'
const apiKey = process.env.REACT_APP_API_KEY

export class App extends Component {

  fetchAPI = () => {
    fetch(`https://developer.nps.gov/api/v1/parks?api_key=${apiKey}`)
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
