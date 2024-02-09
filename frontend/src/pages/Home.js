import React from "react";
import Myimage from "../Images/hero-banner.png"
import Myimage_1 from "../Images/pattern-2.svg"
import Myimage_2 from "../Images/pattern-3.svg"
import Myimage_3 from "../Images/shadow-1.svg"
import Myimage_4 from "../Images/shadow-2.svg"
import Myimage_5 from "../Images/topic-1.png"
import Myimage_9 from "../Images/topic-2.png"
import Myimage_6 from "../Images/topic-3.png"
import Myimage_7 from "../Images/topic-4.png"
import Myimage_8 from "../Images/topic-5.png"
import Myimage_10 from "../Images/featured-1.png"
import Myimage_11 from "../Images/author-1.png"
import Myimage_12 from "../Images/featured-2.png"
import Myimage_13 from "../Images/featured-3.png"
import Myimage_14 from "../Images/featured-4.png"
import Myimage_15 from "../Images/featured-5.png"
import Myimage_16 from "../Images/shadow-3.svg"
import Myimage_17 from "../Images/tag1.png"
import Myimage_18 from "../Images/tag2.png"
import Myimage_19 from "../Images/tag3.png"
import Myimage_20 from "../Images/tag4.png"
import Myimage_21 from "../Images/tag5.png"
import Myimage_22 from "../Images/tag6.png"
import Myimage_23 from "../Images/tag7.png"
import Myimage_24 from "../Images/tag8.png"
import Myimage_25 from "../Images/tag9.png"
import Myimage_26 from "../Images/tag10.png"
import Myimage_27 from "../Images/tag11.png"
import Myimage_28 from "../Images/tag12.png"
import Myimage_29 from "../Images/recent-post-1.jpg"
import Myimage_30 from "../Images/recent-post-2.jpg"
import Myimage_31 from "../Images/recent-post-3.jpg"
import Myimage_32 from "../Images/recent-post-4.jpg"
import Myimage_33 from "../Images/recent-post-5.jpg"
import Myimage_34 from "../Images/popular-post-1.jpg"
import Myimage_35 from "../Images/popular-post-2.jpg"
import Myimage_36 from "../Images/popular-post-3.jpg"
import Myimage_37 from "../Images/popular-post-4.jpg"
import Myimage_38 from "../Images/author-6.png"
import Myimage_39 from "../Images/author-7.png"
import Myimage_40 from "../Images/author-8.png"
import Myimage_41 from "../Images/logo.svg"
import Myimage_42 from "../Images/insta-post-1.png"
import Myimage_43 from "../Images/insta-post-2.png"
import Myimage_44 from "../Images/insta-post-3.png"
import Myimage_45 from "../Images/insta-post-4.png"
import Myimage_46 from "../Images/insta-post-5.png"
import Myimage_47 from "../Images/insta-post-6.png"
import Myimage_48 from "../Images/insta-post-7.png"
import Myimage_49 from "../Images/insta-post-8.png"
import Myimage_50 from "../Images/insta-post-9.png"




class Home extends React.Component{
    render(){
        return(
        <main>
            <article>
                <section className="hero" id="home" aria-label="home">
                  <div className="container">
                  <div className="hero-content">
                <p className="hero-subt-itle">Hello Everyone!</p>
                <h1 className="headline headline-1 section-title">
                  I’m <span className="span">Wren Clark</span>
                </h1>
    
                <p className="hero-text">
                  I use animation as a third dimension by which to simplify experiences and kuiding thro each
                  and every interaction. I’m not adding motion just to spruce things up, but doing it in ways
                  that.
                </p>
                <div className="input-wrapper">
                  <input type="email" name="email_address" placeholder="Type your email address" required
                    className="input-field"/>
                  <button className="btn btn-primary">
                    <span className="span">Subscribe</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>
    
              </div>
              <div className="hero-banner">
                <img src={Myimage} width="327" height="490" alt="Wren Clark" className="w-100"/>
                <img src={Myimage_1} width="27" height="26" alt="shape" className="shape shape-1"/>
                <img src={Myimage_2} width="27" height="26" alt="shape" className="shape shape-2"/>
              </div>
              <img src={Myimage_3} width="500" height="800" alt="" className="hero-bg hero-bg-1"/>
              <img src={Myimage_4} width="500" height="500" alt="" className="hero-bg hero-bg-2"/>
            </div>
          </section>
    
    
       
    
          <section className="topics" id="topics" aria-labelledby="topic-label">
            <div className="container">
              <div className="card topic-card">
                <div className="card-content">
                  <h2 className="headline headline-2 section-title card-title" id="topic-label">
                    Hot topics
                  </h2>
                  <p className="card-text">
                    Don't miss out on the latest news about
                    Travel tips, Hotels review, Food guide...
                  </p>
                  <div className="btn-group">
                    <button className="btn-icon" aria-label="previous" data-slider-prev>
                      <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
                    </button>
    
                    <button className="btn-icon" aria-label="next" data-slider-next>
                      <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </button>
                  </div>
    
                </div>
    
                <div className="slider" data-slider>
                  <ul className="slider-list" data-slider-container>
                    <li className="slider-item">
                      <a href="#" className="slider-card">
                        <figure className="slider-banner img-holder" style={{ '--width': '507', '--height': '618' }}>
                          <img src={Myimage_5} width="507" height="618" loading="lazy" alt="Sport"
                            className="img-cover"/>
                        </figure>
                        <div className="slider-content">
                          <span className="slider-title">Sport</span>
                          <p className="slider-subtitle">38 Articles</p>
                        </div>
                      </a>
                    </li>
    
                    <li className="slider-item">
                      <a href="#" className="slider-card">
                        <figure className="slider-banner img-holder" style={{ '--width': '507', '--height': '618' }}>
                          <img src={Myimage_9} width="507" height="618" loading="lazy" alt="Travel"
                            className="img-cover"/>
                        </figure>
                        <div className="slider-content">
                          <span className="slider-title">Travel</span>
                          <p className="slider-subtitle">63 Articles</p>
                        </div>
                      </a>
                    </li>
    
                    <li className="slider-item">
                      <a href="#" className="slider-card">
                        <figure className="slider-banner img-holder" style={{ '--width': '507', '--height': '618' }}>
                          <img src={Myimage_6} width="507" height="618" loading="lazy" alt="Design"
                            className="img-cover"/>
                        </figure>
                        <div className="slider-content">
                          <span className="slider-title">Design</span>
                          <p className="slider-subtitle">78 Articles</p>
                        </div>
                      </a>
                    </li>
    
                    <li className="slider-item">
                      <a href="#" className="slider-card">
                        <figure className="slider-banner img-holder" style={{ '--width': '507', '--height': '618' }}>
                          <img src={Myimage_7} width="507" height="618" loading="lazy" alt="Movie"
                            className="img-cover"/>
                        </figure>
                        <div className="slider-content">
                          <span className="slider-title">Movie</span>
                          <p className="slider-subtitle">125 Articles</p>
                        </div>
                      </a>
                    </li>
    
                    <li className="slider-item">
                      <a href="#" className="slider-card">
                        <figure className="slider-banner img-holder" style={{ '--width': '507', '--height': '618' }}>
                          <img src={Myimage_8} width="507" height="618" loading="lazy" alt="Lifestyle"
                            className="img-cover"/>
                        </figure>
                        <div className="slider-content">
                          <span className="slider-title">Lifestyle</span>
                          <p className="slider-subtitle">78 Articles</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
    
  
    
          <section className="section feature" aria-label="feature" id="featured">
            <div className="container">
              <h2 className="headline headline-2 section-title">
                <span className="span">Editor's picked</span>
              </h2>
              <p className="section-text">
                Featured and highly rated articles
              </p>
              <ul className="feature-list">
                <li>
                  <div className="card feature-card">
                    <figure className="card-banner img-holder" style={{ '--width': '1602', '--height': '903' }}>
                      <img src={Myimage_10} width="1602" height="903" loading="lazy"
                        alt="Self-observation is the first step of inner unfolding" className="img-cover"/>
                    </figure>
                    <div className="card-content">
                      <div className="card-wrapper">
                        <div className="card-tag">
                          <a href="#" className="span hover-2">#Travel</a>
                          <a href="#" className="span hover-2">#Lifestyle</a>
                        </div>
                        <div className="wrapper">
                          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                          <span className="span">3 mins read</span>
                        </div>
                      </div>
                      <h3 className="headline headline-3">
                        <a href="#" className="card-title hover-2">
                          Self-observation is the first step of inner unfolding
                        </a>
                      </h3>
                      <div className="card-wrapper">
                        <div className="profile-card">
                          <img src={Myimage_11} width="48" height="48" loading="lazy" alt="Joseph"
                            className="profile-banner"/>
                          <div>
                            <p className="card-title">Joseph</p>
                            <p className="card-subtitle">25 Nov 2022</p>
                          </div>
                        </div>
                        <a href="#" className="card-btn">Read more</a>
                      </div>
                    </div>
                  </div>
                </li>
    
                <li>
                  <div className="card feature-card">
                    <figure className="card-banner img-holder" style={{ '--width': '1602', '--height': '903' }}>
                      <img src={Myimage_12} width="1602" height="903" loading="lazy"
                        alt="Self-observation is the first step of inner unfolding" className="img-cover"/>
                    </figure>
                    <div className="card-content">
                      <div className="card-wrapper">
                        <div className="card-tag">
                          <a href="#" className="span hover-2">#Design</a>
                          <a href="#" className="span hover-2">#Movie</a>
                        </div>
                        <div className="wrapper">
                          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                          <span className="span">6 mins read</span>
                        </div>
                      </div>
                      <h3 className="headline headline-3">
                        <a href="#" className="card-title hover-2">
                          Self-observation is the first step of inner unfolding
                        </a>
                      </h3>
                      <div className="card-wrapper">
                        <div className="profile-card">
                          <img src={Myimage_11} width="48" height="48" loading="lazy" alt="Joseph"
                            className="profile-banner"/>
                          <div>
                            <p className="card-title">Joseph</p>
                            <p className="card-subtitle">25 Nov 2022</p>
                          </div>
                        </div>
                        <a href="#" className="card-btn">Read more</a>
                      </div>
                    </div>
                  </div>
                </li>
    
                <li>
                  <div className="card feature-card">
                    <figure className="card-banner img-holder" style={{ '--width': '1602', '--height': '903' }}>
                      <img src={Myimage_13} width="1602" height="903" loading="lazy"
                        alt="Self-observation is the first step of inner unfolding" className="img-cover"/>
                    </figure>
                    <div className="card-content">
                      <div className="card-wrapper">
                        <div className="card-tag">
                          <a href="#" className="span hover-2">#Design</a>
                          <a href="#" className="span hover-2">#Movie</a>
                        </div>
                        <div className="wrapper">
                          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                          <span className="span">6 mins read</span>
                        </div>
                      </div>
                      <h3 className="headline headline-3">
                        <a href="#" className="card-title hover-2">
                          Self-observation is the first step of inner unfolding
                        </a>
                      </h3>
                      <div className="card-wrapper">
                        <div className="profile-card">
                          <img src={Myimage_11} width="48" height="48" loading="lazy" alt="Joseph"
                            className="profile-banner"/>
                          <div>
                            <p className="card-title">Joseph</p>
                            <p className="card-subtitle">25 Nov 2022</p>
                          </div>
                        </div>
                        <a href="#" className="card-btn">Read more</a>
                      </div>
                    </div>
                  </div>
                </li>
    
                <li>
                  <div className="card feature-card">
                    <figure className="card-banner img-holder" style={{ '--width': '1602', '--height': '903' }}>
                      <img src={Myimage_14} width="1602" height="903" loading="lazy"
                        alt="Self-observation is the first step of inner unfolding" className="img-cover"/>
                    </figure>
                    <div className="card-content">
                      <div className="card-wrapper">
                        <div className="card-tag">
                          <a href="#" className="span hover-2">#Design</a>
                          <a href="#" className="span hover-2">#Movie</a>
                        </div>
                        <div className="wrapper">
                          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                          <span className="span">6 mins read</span>
                        </div>
                      </div>
                      <h3 className="headline headline-3">
                        <a href="#" className="card-title hover-2">
                          Self-observation is the first step of inner unfolding
                        </a>
                      </h3>
                      <div className="card-wrapper">
                        <div className="profile-card">
                          <img src={Myimage_11} width="48" height="48" loading="lazy" alt="Joseph"
                            className="profile-banner"/>
                          <div>
                            <p className="card-title">Joseph</p>
                            <p className="card-subtitle">25 Nov 2022</p>
                          </div>
                        </div>
                        <a href="#" className="card-btn">Read more</a>
                      </div>
                    </div>
                  </div>
                </li>
    
                <li>
                  <div className="card feature-card">
                    <figure className="card-banner img-holder" style={{ '--width': '1602', '--height': '903' }}>
                      <img src={Myimage_15} width="1602" height="903" loading="lazy"
                        alt="Self-observation is the first step of inner unfolding" className="img-cover"/>
                    </figure>
                    <div className="card-content">
                      <div className="card-wrapper">
                        <div className="card-tag">
                          <a href="#" className="span hover-2">#Design</a>
                          <a href="#" className="span hover-2">#Movie</a>
                        </div>
                        <div className="wrapper">
                          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                          <span className="span">6 mins read</span>
                        </div>
                      </div>
                      <h3 className="headline headline-3">
                        <a href="#" className="card-title hover-2">
                          Self-observation is the first step of inner unfolding
                        </a>
                      </h3>
                      <div className="card-wrapper">
                        <div className="profile-card">
                          <img src={Myimage_11} width="48" height="48" loading="lazy" alt="Joseph"
                            className="profile-banner"/>
                          <div>
                            <p className="card-title">Joseph</p>
                            <p className="card-subtitle">25 Nov 2022</p>
                          </div>
                        </div>
                        <a href="#" className="card-btn">Read more</a>
                      </div>
                    </div>
                  </div>
                </li>
    
    
              </ul>
    
              <a href="#" className="btn btn-secondary">
                <span className="span">Show More Posts</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
            <img src={Myimage_16} width="500" height="1500" loading="lazy" alt="" className="feature-bg"/>
          </section>
    
    
          <section className="tags" aria-labelledby="tag-label">
            <div className="container">
              <h2 className="headline headline-2 section-title" id="tag-label">
                <span className="span">Popular Tags</span>
              </h2>
              <p className="section-text">Most searched keywords</p>
              <ul className="grid-list">
                <li>
                  <button className="card tag-btn">
                    <img src={Myimage_17} width="32" height="32" loading="lazy" alt="Travel"/>
                    <p className="btn-text">Travel</p>
                  </button>
                </li>
                <li>
                  <button className="card tag-btn">
                    <img src={Myimage_18}width="32" height="32" loading="lazy" alt="Culture"/>
                    <p className="btn-text">Culture</p>
                  </button>
                </li>
                <li>
                  <button className="card tag-btn">
                    <img src={Myimage_19} width="32" height="32" loading="lazy" alt="Lifestyle"/>
                    <p className="btn-text">Lifestyle</p>
                  </button>
                </li>
                <li>
                  <button className="card tag-btn">
                    <img src={Myimage_20} width="32" height="32" loading="lazy" alt="Fashion"/>
                    <p className="btn-text">Fashion</p>
                  </button>
                </li>
                <li>
                  <button className="card tag-btn">
                    <img src={Myimage_21} width="32" height="32" loading="lazy" alt="Food"/>
                    <p className="btn-text">Food</p>
                  </button>
                </li>
                <li>
                  <button className="card tag-btn">
                    <img src={Myimage_22} width="32" height="32" loading="lazy" alt="Space"/>
                    <p className="btn-text">Space</p>
                  </button>
                </li>
                <li>
                  <button className="card tag-btn">
                    <img src={Myimage_23} width="32" height="32" loading="lazy" alt="Animal"/>
                    <p className="btn-text">Animal</p>
                  </button>
                </li>
                <li>
                  <button className="card tag-btn">
                    <img src={Myimage_24}width="32" height="32" loading="lazy" alt="Minimal"/>
                    <p className="btn-text">Minimal</p>
                  </button>
                </li>
                <li>
                  <button className="card tag-btn">
                    <img src={Myimage_25} width="32" height="32" loading="lazy" alt="Interior"/>
                    <p className="btn-text">Interior</p>
                  </button>
                </li>
                <li>
                  <button className="card tag-btn">
                    <img src={Myimage_26} width="32" height="32" loading="lazy" alt="Plant"/>
                    <p className="btn-text">Plant</p>
                  </button>
                </li>
                <li>
                  <button className="card tag-btn">
                    <img src={Myimage_27} width="32" height="32" loading="lazy" alt="Nature"/>
                    <p className="btn-text">Nature</p>
                  </button>
                </li>
                <li>
                  <button className="card tag-btn">
                    <img src={Myimage_28} width="32" height="32" loading="lazy" alt="Business"/>
                    <p className="btn-text">Business</p>
                  </button>
                </li>
              </ul>
            </div>
          </section>
    
    
          <section className="section recent-post" id="recent" aria-labelledby="recent-label">
            <div className="container">
    
              <div className="post-main">
    
                <h2 className="headline headline-2 section-title">
                  <span className="span">Recent posts</span>
                </h2>
    
                <p className="section-text">
                  Don't miss the latest trends
                </p>
    
                <ul className="grid-list">
    
                  <li>
                    <div className="recent-post-card">
    
                      <figure className="card-banner img-holder" style={{ '--width': '271', '--height': '258' }}>
                        <img src={Myimage_29} width="271" height="258" loading="lazy"
                          alt="Helpful Tips for Working from Home as a Freelancer" className="img-cover"/>
                      </figure>
    
                      <div className="card-content">
    
                        <a href="#" className="card-badge">Working Tips</a>
    
                        <h3 className="headline headline-3 card-title">
                          <a href="#" className="link hover-2">Helpful Tips for Working from Home as a Freelancer</a>
                        </h3>
    
                        <p className="card-text">
                          Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                          roadrunner flapped lynx far that and jeepers giggled far and far
                        </p>
    
                        <div className="card-wrapper">
                          <div className="card-tag">
                            <a href="#" className="span hover-2"># Travel</a>
    
                            <a href="#" className="span hover-2"># Lifestyle</a>
                          </div>
    
                          <div className="wrapper">
                            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    
                            <span className="span">3 mins read</span>
                          </div>
                        </div>
    
                      </div>
    
                    </div>
                  </li>
    
                  <li>
                    <div className="recent-post-card">
    
                      <figure className="card-banner img-holder" style={{ '--width': '271', '--height': '258' }}>
                        <img src={Myimage_30} width="271" height="258" loading="lazy"
                          alt="Helpful Tips for Working from Home as a Freelancer" className="img-cover"/>
                      </figure>
    
                      <div className="card-content">
    
                        <a href="#" className="card-badge">Working Tips</a>
    
                        <h3 className="headline headline-3 card-title">
                          <a href="#" className="link hover-2">Helpful Tips for Working from Home as a Freelancer</a>
                        </h3>
    
                        <p className="card-text">
                          Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                          roadrunner flapped lynx far that and jeepers giggled far and far
                        </p>
    
                        <div className="card-wrapper">
                          <div className="card-tag">
                            <a href="#" className="span hover-2"># Travel</a>
    
                            <a href="#" className="span hover-2"># Lifestyle</a>
                          </div>
    
                          <div className="wrapper">
                            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    
                            <span className="span">3 mins read</span>
                          </div>
                        </div>
    
                      </div>
    
                    </div>
                  </li>
    
                  <li>
                    <div className="recent-post-card">
    
                      <figure className="card-banner img-holder" style={{ '--width': '271', '--height': '258' }}>
                        <img src={Myimage_31} width="271" height="258" loading="lazy"
                          alt="Helpful Tips for Working from Home as a Freelancer" className="img-cover"/>
                      </figure>
    
                      <div className="card-content">
    
                        <a href="#" className="card-badge">Working Tips</a>
    
                        <h3 className="headline headline-3 card-title">
                          <a href="#" className="link hover-2">Helpful Tips for Working from Home as a Freelancer</a>
                        </h3>
    
                        <p className="card-text">
                          Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                          roadrunner flapped lynx far that and jeepers giggled far and far
                        </p>
    
                        <div className="card-wrapper">
                          <div className="card-tag">
                            <a href="#" className="span hover-2"># Travel</a>
    
                            <a href="#" className="span hover-2"># Lifestyle</a>
                          </div>
    
                          <div className="wrapper">
                            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    
                            <span className="span">3 mins read</span>
                          </div>
                        </div>
    
                      </div>
    
                    </div>
                  </li>
    
                  <li>
                    <div className="recent-post-card">
    
                      <figure className="card-banner img-holder" style={{ '--width': '271', '--height': '258' }}>
                        <img src={Myimage_32} width="271" height="258" loading="lazy"
                          alt="Helpful Tips for Working from Home as a Freelancer" className="img-cover"/>
                      </figure>
    
                      <div className="card-content">
    
                        <a href="#" className="card-badge">Working Tips</a>
    
                        <h3 className="headline headline-3 card-title">
                          <a href="#" className="link hover-2">Helpful Tips for Working from Home as a Freelancer</a>
                        </h3>
    
                        <p className="card-text">
                          Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                          roadrunner flapped lynx far that and jeepers giggled far and far
                        </p>
    
                        <div className="card-wrapper">
                          <div className="card-tag">
                            <a href="#" className="span hover-2"># Travel</a>
    
                            <a href="#" className="span hover-2"># Lifestyle</a>
                          </div>
    
                          <div className="wrapper">
                            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    
                            <span className="span">3 mins read</span>
                          </div>
                        </div>
    
                      </div>
    
                    </div>
                  </li>
    
                  <li>
                    <div className="recent-post-card">
    
                      <figure className="card-banner img-holder" style={{ '--width': '271', '--height': '258' }}>
                        <img src={Myimage_33} width="271" height="258" loading="lazy"
                          alt="Helpful Tips for Working from Home as a Freelancer" className="img-cover"/>
                      </figure>
    
                      <div className="card-content">
    
                        <a href="#" className="card-badge">Working Tips</a>
    
                        <h3 className="headline headline-3 card-title">
                          <a href="#" className="link hover-2">Helpful Tips for Working from Home as a Freelancer</a>
                        </h3>
    
                        <p className="card-text">
                          Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                          roadrunner flapped lynx far that and jeepers giggled far and far
                        </p>
    
                        <div className="card-wrapper">
                          <div className="card-tag">
                            <a href="#" className="span hover-2"># Travel</a>
    
                            <a href="#" className="span hover-2"># Lifestyle</a>
                          </div>
    
                          <div className="wrapper">
                            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    
                            <span className="span">3 mins read</span>
                          </div>
                        </div>
    
                      </div>
    
                    </div>
                  </li>
    
                </ul>
    
                <nav aria-label="pagination" className="pagination">
    
                  <a href="#" className="pagination-btn" aria-label="previous page">
                    <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
                  </a>
    
                  <a href="#" className="pagination-btn">1</a>
                  <a href="#" className="pagination-btn">2</a>
                  <a href="#" className="pagination-btn">3</a>
                  <a href="#" className="pagination-btn" aria-label="more page">...</a>
    
                  <a href="#" className="pagination-btn" aria-label="next page">
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>
    
                </nav>
    
              </div>
    
              <div className="post-aside grid-list">
    
                <div className="card aside-card">
    
                  <h3 className="headline headline-2 aside-title">
                    <span className="span">Popular Posts</span>
                  </h3>
    
                  <ul className="popular-list">
    
                    <li>
                      <div className="popular-card">
    
                        <figure className="card-banner img-holder" style={{ '--width': '64', '--height': '64' }}>
                          <img src={Myimage_34} width="64" height="64" loading="lazy"
                            alt="Creating is a privilege but it’s also a gift" className="img-cover"/>
                        </figure>
    
                        <div className="card-content">
    
                          <h4 className="headline headline-4 card-title">
                            <a href="#" className="link hover-2">Creating is a privilege but it’s also a gift</a>
                          </h4>
    
                          <div className="warpper">
                            <p className="card-subtitle">15 mins read</p>
    
                            <time className="publish-date" datetime="2022-04-15">15 April 2022</time>
                          </div>
    
                        </div>
    
                      </div>
                    </li>
    
                    <li>
                      <div className="popular-card">
    
                        <figure className="card-banner img-holder" style={{ '--width': '64', '--height': '64' }}>
                          <img src={Myimage_35} width="64" height="64" loading="lazy"
                            alt="Being unique is better than being perfect" className="img-cover"/>
                        </figure>
    
                        <div className="card-content">
    
                          <h4 className="headline headline-4 card-title">
                            <a href="#" className="link hover-2">Being unique is better than being perfect</a>
                          </h4>
    
                          <div className="warpper">
                            <p className="card-subtitle">15 mins read</p>
    
                            <time className="publish-date" datetime="2022-04-15">15 April 2022</time>
                          </div>
    
                        </div>
    
                      </div>
                    </li>
    
                    <li>
                      <div className="popular-card">
    
                        <figure className="card-banner img-holder" style={{ '--width': '64', '--height': '64' }}>
                          <img src={Myimage_36} width="64" height="64" loading="lazy"
                            alt="Every day, in every city and town across the country" className="img-cover"/>
                        </figure>
    
                        <div className="card-content">
    
                          <h4 className="headline headline-4 card-title">
                            <a href="#" className="link hover-2">Every day, in every city and town across the country</a>
                          </h4>
    
                          <div className="warpper">
                            <p className="card-subtitle">15 mins read</p>
    
                            <time className="publish-date" datetime="2022-04-15">15 April 2022</time>
                          </div>
    
                        </div>
    
                      </div>
                    </li>
    
                    <li>
                      <div className="popular-card">
    
                        <figure className="card-banner img-holder" style={{ '--width': '64', '--height': '64' }}>
                          <img src={Myimage_37} width="64" height="64" loading="lazy"
                            alt="Your voice, your mind, your story, your vision" className="img-cover"/>
                        </figure>
    
                        <div className="card-content">
    
                          <h4 className="headline headline-4 card-title">
                            <a href="#" className="link hover-2">Your voice, your mind, your story, your vision</a>
                          </h4>
    
                          <div className="warpper">
                            <p className="card-subtitle">15 mins read</p>
    
                            <time className="publish-date" datetime="2022-04-15">15 April 2022</time>
                          </div>
    
                        </div>
    
                      </div>
                    </li>
    
                    <li>
                      <div className="popular-card">
    
                        <figure className="card-banner img-holder" style={{ '--width': '64', '--height': '64' }}>
                          <img src={Myimage_30} width="64" height="64" loading="lazy"
                            alt="Being unique is better than being perfect" className="img-cover"/>
                        </figure>
    
                        <div className="card-content">
    
                          <h4 className="headline headline-4 card-title">
                            <a href="#" className="link hover-2">Being unique is better than being perfect</a>
                          </h4>
    
                          <div className="warpper">
                            <p className="card-subtitle">15 mins read</p>
    
                            <time className="publish-date" datetime="2022-04-15">15 April 2022</time>
                          </div>
    
                        </div>
    
                      </div>
                    </li>
    
                  </ul>
    
                </div>
    
                <div className="card aside-card">
    
                  <h3 className="headline headline-2 aside-title">
                    <span className="span">Last Comment</span>
                  </h3>
    
                  <ul className="comment-list">
    
                    <li>
                      <div className="comment-card">
    
                        <blockquote className="card-text">
                          “ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                          roadrunner “
                        </blockquote>
    
                        <div className="profile-card">
                          <figure className="profile-banner img-holder">
                            <img src={Myimage_38} width="32" height="32" loading="lazy" alt="Jane Cooper"/>
                          </figure>
    
                          <div>
                            <p className="card-title">Jane Cooper</p>
    
                            <time className="card-date" datetime="2022-04-15">15 April 2022</time>
                          </div>
                        </div>
    
                      </div>
                    </li>
    
                    <li>
                      <div className="comment-card">
    
                        <blockquote className="card-text">
                          “ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                          roadrunner “
                        </blockquote>
    
                        <div className="profile-card">
                          <figure className="profile-banner img-holder">
                            <img src={Myimage_39} width="32" height="32" loading="lazy" alt="Katen Doe"/>
                          </figure>
    
                          <div>
                            <p className="card-title">Katen Doe</p>
    
                            <time className="card-date" datetime="2022-04-15">15 April 2022</time>
                          </div>
                        </div>
    
                      </div>
                    </li>
    
                    <li>
                      <div className="comment-card">
    
                        <blockquote className="card-text">
                          “ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard
                          roadrunner “
                        </blockquote>
    
                        <div className="profile-card">
                          <figure className="profile-banner img-holder">
                            <img src={Myimage_40} width="32" height="32" loading="lazy"
                              alt="Barbara Cartland"/>
                          </figure>
    
                          <div>
                            <p className="card-title">Barbara Cartland</p>
    
                            <time className="card-date" datetime="2022-04-15">15 April 2022</time>
                          </div>
                        </div>
    
                      </div>
                    </li>
    
                  </ul>
    
                </div>
    
                <div className="card aside-card insta-card">
    
                  <a href="#" className="logo">
                    <img src={Myimage_41} width="119" height="37" loading="lazy" alt="Wren logo"/>
                  </a>
    
                  <p className="card-text">
                    Follow us on instagram
                  </p>
    
                  <ul className="insta-list">
    
                    <li>
                      <a href="#" className="insta-post img-holder" style={{ '--width': '276', '--height': '277' }}>
                        <img src={Myimage_42} width="276" height="277" loading="lazy" alt="insta post"
                          className="img-cover"/>
                      </a>
                    </li>
    
                    <li>
                      <a href="#" className="insta-post img-holder" styl={{ '--width': '276', '--height': '277' }}>
                        <img src={Myimage_43} width="276" height="277" loading="lazy" alt="insta post"
                          className="img-cover"/>
                      </a>
                    </li>
    
                    <li>
                      <a href="#" className="insta-post img-holder" style={{ '--width': '276', '--height': '277' }}>
                        <img src={Myimage_44} width="276" height="277" loading="lazy" alt="insta post"
                          className="img-cover"/>
                      </a>
                    </li>
    
                    <li>
                      <a href="#" className="insta-post img-holder" style={{ '--width': '276', '--height': '277' }}>
                        <img src={Myimage_45} width="276" height="277" loading="lazy" alt="insta post"
                          className="img-cover"/>
                      </a>
                    </li>
    
                    <li>
                      <a href="#" className="insta-post img-holder" style={{ '--width': '276', '--height': '277' }}>
                        <img src={Myimage_46} width="276" height="277" loading="lazy" alt="insta post"
                          className="img-cover"/>
                      </a>
                    </li>
    
                    <li>
                      <a href="#" className="insta-post img-holder" style={{ '--width': '276', '--height': '277' }}>
                        <img src={Myimage_47} width="276" height="277" loading="lazy" alt="insta post"
                          className="img-cover"/>
                      </a>
                    </li>
    
                    <li>
                      <a href="#" className="insta-post img-holder" style={{ '--width': '276', '--height': '277' }}>
                        <img src={Myimage_48} width="276" height="277" loading="lazy" alt="insta post"
                          className="img-cover"/>
                      </a>
                    </li>
    
                    <li>
                      <a href="#" className="insta-post img-holder" style={{ '--width': '276', '--height': '277' }}>
                        <img src={Myimage_49} width="276" height="277" loading="lazy" alt="insta post"
                          className="img-cover"/>
                      </a>
                    </li>
    
                    <li>
                      <a href="#" className="insta-post img-holder" style={{ '--width': '276', '--height': '277' }}>
                        <img src={Myimage_50} width="276" height="277" loading="lazy" alt="insta post"
                          className="img-cover"/>
                      </a>
                    </li>
    
                  </ul>
    
                </div>
    
              </div>
    
            </div>
          </section>
    
        </article>
      </main>
      );
    }
}

export default Home;