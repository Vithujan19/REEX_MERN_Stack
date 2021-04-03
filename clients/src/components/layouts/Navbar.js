import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../layouts/Navbar.css';
import logo from '../../unnamed.png';
import Notification from './Notification';
import Setting from './Elements/Setting';
import Logout from './Elements/Logout';
import Profile from './Elements/profile';

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="navbar" id="navbar">
        <div className="nav-content">
        <img style={{width: "100px"}} src={logo} alt="logo"/>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
              className="nav-link"
                activeClass="active"
                to="Notification"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Notification/>
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link"
                activeClass="active"
                to="Setting"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Setting/>
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Profile/>
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Logout/>
              </Link>
            </li> 
          </ul>
        </div>
      </nav>
    );
  }
}
