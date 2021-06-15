import React, { Component } from 'react'
import '../css/Hero.css'
import Form from './Form'

export class Hero extends Component {
    constructor() {
        super()
        this.state = {
            image1: {
                src: 'https://images.unsplash.com/photo-1608233695800-34245ba7274f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                description: 'Yellowstone National Park, United States'
            },
            image2: {
                src: 'https://images.unsplash.com/photo-1606859309981-270838d57ed8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
                description: 'Arches National Park, Utah, USA'
            }
        }
    }


    render() {
        return (
            <div className="hero container">
                <div className="hero-image1">
                    <img className="pure-img" src={this.state.image1.src} alt={this.state.image1.description} title={this.state.image1.description} />
                </div>
                <div className="hero-content">
                    <h1>Start Your Park Adventure Today</h1>
                    <Form fetchingParks={this.props.fetchingParks}/>
                </div>

                <div className="hero-image2">
                 <img className="pure-img" src={this.state.image2.src} alt={this.state.image2.description} title={this.state.image2.description} />
                </div>

            </div>
        )
    }
}

export default Hero
