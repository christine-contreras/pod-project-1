import React, { Component } from 'react'
import Form from './Form'

export class Hero extends Component {
    render() {
        return (
            <div className="hero container">
                <h1>Title Here</h1>
                <Form fetchingParks={this.props.fetchingParks}/>

            </div>
        )
    }
}

export default Hero
