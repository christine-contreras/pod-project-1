import React, { Component } from 'react'
import ParkCard from './ParkCard'

export class ParksContainer extends Component {
    constructor() {
        super()
        this.state = {
            stateNames: {
                "AL": "Alabama",
                "AK": "Alaska",
                "AS": "American Samoa",
                "AZ": "Arizona",
                "AR": "Arkansas",
                "CA": "California",
                "CO": "Colorado",
                "CT": "Connecticut",
                "DE": "Delaware",
                "DC": "District Of Columbia",
                "FM": "Federated States Of Micronesia",
                "FL": "Florida",
                "GA": "Georgia",
                "GU": "Guam",
                "HI": "Hawaii",
                "ID": "Idaho",
                "IL": "Illinois",
                "IN": "Indiana",
                "IA": "Iowa",
                "KS": "Kansas",
                "KY": "Kentucky",
                "LA": "Louisiana",
                "ME": "Maine",
                "MH": "Marshall Islands",
                "MD": "Maryland",
                "MA": "Massachusetts",
                "MI": "Michigan",
                "MN": "Minnesota",
                "MS": "Mississippi",
                "MO": "Missouri",
                "MT": "Montana",
                "NE": "Nebraska",
                "NV": "Nevada",
                "NH": "New Hampshire",
                "NJ": "New Jersey",
                "NM": "New Mexico",
                "NY": "New York",
                "NC": "North Carolina",
                "ND": "North Dakota",
                "MP": "Northern Mariana Islands",
                "OH": "Ohio",
                "OK": "Oklahoma",
                "OR": "Oregon",
                "PW": "Palau",
                "PA": "Pennsylvania",
                "PR": "Puerto Rico",
                "RI": "Rhode Island",
                "SC": "South Carolina",
                "SD": "South Dakota",
                "TN": "Tennessee",
                "TX": "Texas",
                "UT": "Utah",
                "VT": "Vermont",
                "VI": "Virgin Islands",
                "VA": "Virginia",
                "WA": "Washington",
                "WV": "West Virginia",
                "WI": "Wisconsin",
                "WY": "Wyoming"
            },

            defaultParks: []
        }
    }

    renderStateName = (parkState) => {
        const stateObjects = this.state.stateNames
        return stateObjects[parkState]
    }

    

    

    render() {
        return (
            <div className="padding-top">
            <div className="container">
                <div className="parks-title center">
                    <h2><span className="color-3 subtitle block">{this.renderStateName(this.props.parkState)}</span>{this.props.title}</h2>
                </div>

                <div className="container-flex padding-top">
                    {this.props.parks.map(park => <ParkCard handleParks={this.props.handleParks}
                    page={this.props.page}
                    key={park.id}
                    parkInfo={park}/>)}
                </div>
            </div>
            </div>
        )
    }
}

export default ParksContainer
