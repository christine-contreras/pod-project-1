import React, { Component } from 'react'
import Hero from '../Components/Hero'
import ParksContainer from '../Components/ParksContainer'


export class Home extends Component {


    render() {
        return (
            <>
                <Hero fetchingParks={this.props.fetchingParks} />

                <ParksContainer
                page={this.props.location.pathname}
                title={this.props.title}
                parkState={this.props.parkState} 
                parks={this.props.parks} handleParks={this.props.handleParks}/>
            </>
        )
    }
}

export default Home
