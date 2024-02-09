import React from "react";
import Myimage from "../Images/logo.svg"
import Myimage_1 from "../Images/author-1.png"


class Header extends React.Component{
    render(){
        return(
            <header className="header" data-header>
            <div className="container">
              <a href="#" className="log">
                <img src={Myimage} width="119" height="37" alt="Enoc logo"/>
              </a>
              <nav className="navbar" data-navbar>
                <div className="navbar-top">
                  <a href="#" className="log">
                    <img src={Myimage} width="119" height="37" alt="Enoc logo"/>
                  </a>
                  <button className="nav-close-btn" aria-label="close menu" data-nav-taggler>
                    <ion-icon name="close-circle" aria-hidden="true"></ion-icon>
                  </button>
                </div>
                <ul className="navbar-list">
                  <li>
                    <a href="#home" className="navbar-link hover-1" data-nav-taggler>Home</a>
                  </li>
                  <li>
                    <a href="#topics" className="navbar-link hover-1" data-nav-taggler>Topics</a>
                  </li>
                  <li>
                    <a href="#featured" className="navbar-link hover-1" data-nav-taggler>Featured Post</a>
                  </li>
                  <li>
                    <a href="#recent" className="navbar-link hover-1" data-nav-taggler>Recent Post</a>
                  </li>
                  <li>
                    <a href="#" className="navbar-link hover-1" data-nav-taggler>Contact</a>
                  </li>
                </ul>
                <div className="navbar-bottom">
                  <div className="profile-card">
                    <img src={Myimage_1} width="48" height="48" alt="Steven" className="profile-banner"/>
                    <div>
                      <p className="card-tittle">Hello Steven !</p>
        
                      <p className="card-subtitle">
                        You have 3 new messages
                      </p>
                    </div>
                  </div>
                  <ul className="link-list">
                    <li>
                      <a href="#" className="navbar-bottom-link hover-1">Profile</a>
                    </li>
                    <li>
                      <a href="#" className="navbar-bottom-link hover-1">Articles Saved</a>
                    </li>
                    <li>
                      <a href="#" className="navbar-bottom-link hover-1">Add New Post</a>
                    </li>
        
                    <li>
                      <a href="#" className="navbar-bottom-link hover-1">My Likes</a>
                    </li>
                    <li>
                      <a href="#" className="navbar-bottom-link hover-1">Account Setting</a>
                    </li>
                    <li>
                      <a href="#" className="navbar-bottom-link hover-1">Sign Out</a>
                    </li>
                  </ul>
        
                </div>
                <p className="copyrigtht-text">
                  Copyright 2023 © Wren - Personal Blog Template.
                  Developed by Enoc
                </p>
              </nav>
              <a href="" className="btn btn-primary">Subscribe</a>
              <button className="nav-open-btn" aria-label="open menu" data-nav-taggler>
                <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>
          </header>
        );
    }
}

export default Header;