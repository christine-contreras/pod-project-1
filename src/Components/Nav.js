import React, { Component } from 'react'
import '../css/Nav.css'

export class Nav extends Component {
    render() {
        return (
            <nav>
            <div className="pure-menu pure-menu-horizontal">
               <div className="menu-container center">
                <a className="pure-menu-heading logo" href="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252.74 129.05"><rect className="cls-1" y="117.51" width="252.74" height="11.55"/><polyline className="cls-2" points="201.41 118.62 126.37 5.43 51.33 118.62"/><polyline className="cls-2" points="98.33 48.02 110.15 63.71 126.65 52.57 143 63.71 154.62 48.02"/><polyline className="cls-2" points="236.94 119.04 193.43 53.42 149.93 119.04"/><polyline className="cls-2" points="176.88 78.38 182.52 90.03 193.43 83.36 205.59 90.19 209.98 78.38"/><polyline className="cls-2" points="102.81 119.04 59.31 53.42 15.8 119.04"/><polyline className="cls-2" points="42.75 78.38 48.38 90.03 59.29 83.36 71.46 90.19 75.84 78.38"/></svg>
                <span className="block">State Adventures</span>

                    
                    </a>
               </div>
            </div>
        </nav>
        )
    }
}

export default Nav
