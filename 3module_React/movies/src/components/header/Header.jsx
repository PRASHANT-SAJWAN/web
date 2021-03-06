import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    state = {
        newMovieName: "",
    };

    handleOnChange = (e) => {
        let value = e.target.value;
        this.setState({
            newMovieName: value,
        });
    };

    handleKeyPress = (e) => {
        console.log(this.props);
        if (e.key === "Enter") {
            this.props.setMovies(this.state.newMovieName);
        }
    };

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + "/logo.png"} alt="" />
                </div>
                <div className="search-btn">
                    <input
                        className="search-movies"
                        value={this.state.newMovieName}
                        type="text"
                        placeholder="Search"
                        onChange={this.handleOnChange}
                        onKeyPress={this.handleKeyPress}
                    />
                </div>

                <div className="header-links">
                    <div className="header-link">
                        <Link to='/'>Home</Link>
                    </div>
                    <div className="header-link">
                        <Link to={{ pathname: `/fav`, favList: this.props.favList, removeFavouriteMovie: this.props.removeFavouriteMovie }} >Favourite</Link>
                    </div>
                </div>
                {this.props.user && <button onClick={() => { this.props.handleLogout() }}>Logout</button>}
            </div>
        );
    }
}
export default Header;