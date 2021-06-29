import React, { Component } from 'react'
import '../css/ParkCard.css'

export class ParkCard extends Component {

    render() {

        const cardStyle = {
            background: `url('${this.props.parkInfo.images[0].url}') center`,
            backgroundSize: 'cover'
        }
        return (
            <div className="park-card">
                <div className="card-image" style={cardStyle}></div>

                <div className="park-card-info">
                    <h3 className="h5 color-4">{this.props.parkInfo.fullName}</h3>
                    <p className="color-3">{this.props.parkInfo.description.slice(0, 130).concat('...')}</p>

                    <button type="submit" className="pure-button pure-button-primary" onClick={() => this.props.handleParks(this.props.parkInfo)}>{this.props.page === "/saved" ? "Remove Park" : "Save Park"}</button>
                </div>

            </div>
        )
    }
}

export default ParkCard
