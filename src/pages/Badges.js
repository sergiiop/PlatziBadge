import React, { Component } from 'react'

import confLogo from '../images/badge-header.svg';
import './styles/Badges.css';
import Navbar from '../components/Navbar';

export default class Badges extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
