import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

class Splash extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.currentUserId) {
            this.props.history.push('/sell')
        } else {
            this.props.openModal('login')
        }
    }
    
    render() {
    return (<header className="splash-test">
        <div className="navbar">
            <div className="left-side-of-nav-bar">
                <div className="logo-and-title">
                    <img className="seatgeek-logo" src="seatgeek_logo.png" alt=""/>
                    {/* <h1 className="seatnerd-text">SeatNerd</h1> */}
                    <a className="seatnerd-text" href="/">SeatNerd</a>
                </div>
                <div className="index-navbar-buttons">
                    <button className="index-button"><Link to={"/teams"} style={{ textDecoration: 'none', color: 'white' }}>Teams</Link></button>
                    <button className="index-button"><Link to={"/events"} style={{ textDecoration: 'none', color: 'white' }}>Events</Link></button>
                    <button className="index-button"><Link to={"/venues"} style={{ textDecoration: 'none', color: 'white' }}>Venues</Link></button>
                    <button className="index-button" onClick={this.handleClick}>Sell</button>
                </div>
            </div>
            <GreetingContainer />
        </div>
        <div className="intro-splash-tagline">
            <p>Life's an event.</p>
            <p>We have the tickets.</p>
        </div>
        <div className="nav-bar-search-bar">
            <SearchContainer />
        </div>
    </header>)}
};

export default Splash;