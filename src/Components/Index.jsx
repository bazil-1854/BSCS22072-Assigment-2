import React from 'react'
import LiveCoffeeMaking from './LiveCoffeeMaking'
import CoffeeServe from './CoffeeServe'
import KindofCoffee from './KindofCoffee'

const Index = () => {
    return (
        <div>
            <header id="header-home" >
                <div className="header-top">
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-lg-8 col-sm-4 col-8 header-top-right no-padding">
                                <ul>
                                    <li>
                                        Mon-Fri: 8am to 2pm
                                    </li>
                                    <li>
                                        Sat-Sun: 11am to 4pm
                                    </li>
                                    <li>
                                        <a href="tel:(012) 6985 236 7512">(012) 6985 236 7512</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-between d-flex">
                        <div id="logo">
                            <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
                        </div>
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li className="menu-active"><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#coffee">Coffee</a></li>
                                <li><a href="#review">Review</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li className="menu-has-children"><a href="">Pages</a>
                                    <ul>
                                        <li><a href="generic.html">Generic</a></li>
                                        <li><a href="elements.html">Elements</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="banner-area" id="home">
                <div className="container">
                    <div className="row fullscreen d-flex align-items-center justify-content-start">
                        <div className="banner-content col-lg-7">
                            <h6 className="text-white text-uppercase">Now you can feel the Energy</h6>
                            <h1>
                                Start your day with <br />
                                a black Coffee
                            </h1>
                            <a href="#" className="primary-btn text-uppercase">Buy Now</a>
                        </div>
                    </div>
                </div>
            </section>


            <LiveCoffeeMaking />
            <CoffeeServe />
            <KindofCoffee />
            <section className="review-area section-gap" id="review">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-10">
                            <div className="title text-center">
                                <h1 className="mb-10">What kind of Coffee we serve for you</h1>
                                <p>Who are in extremely love with eco friendly system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 single-review">
                            <img src="img/r1.png" alt="" />
                            <div className="title d-flex flex-row">
                                <h4>lorem ipusm</h4>
                                <div className="star">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                            <p>
                                Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 single-review">
                            <img src="img/r2.png" alt="" />
                            <div className="title d-flex flex-row">
                                <h4>lorem ipusm</h4>
                                <div className="star">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                            <p>
                                Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                            </p>
                        </div>
                    </div>
                    <div className="row counter-row">
                        <div className="col-lg-3 col-md-6 single-counter">
                            <h1 className="counter">2536</h1>
                            <p>Happy Client</p>
                        </div>
                        <div className="col-lg-3 col-md-6 single-counter">
                            <h1 className="counter">7562</h1>
                            <p>Total Projects</p>
                        </div>
                        <div className="col-lg-3 col-md-6 single-counter">
                            <h1 className="counter">2013</h1>
                            <p>Cups Coffee</p>
                        </div>
                        <div className="col-lg-3 col-md-6 single-counter">
                            <h1 className="counter">10536</h1>
                            <p>Total Submitted</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-area section-gap" id="blog">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-10">
                            <div className="title text-center">
                                <h1 className="mb-10">What kind of Coffee we serve for you</h1>
                                <p>Who are in extremely love with eco friendly system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 single-blog">
                            <img className="img-fluid" src="img/b1.jpg" alt="" />
                            <ul className="post-tags">
                                <li><a href="#">Travel</a></li>
                                <li><a href="#">Life Style</a></li>
                            </ul>
                            <a href="#"><h4>Portable latest Fashion for young women</h4></a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
                            </p>
                            <p className="post-date">
                                31st January, 2018
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 single-blog">
                            <img className="img-fluid" src="img/b2.jpg" alt="" />
                            <ul className="post-tags">
                                <li><a href="#">Travel</a></li>
                                <li><a href="#">Life Style</a></li>
                            </ul>
                            <a href="#"><h4>Portable latest Fashion for young women</h4></a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
                            </p>
                            <p className="post-date">
                                31st January, 2018
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>About Us</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
                                </p>
                                <p className="footer-text">
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>Newsletter</h6>
                                <p>Stay update with our latest</p>
                                <div className="" id="mc_embed_signup">
                                    <form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="form-inline">
                                        <input className="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '" required="" type="email" />
                                        <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                        <div style={{ position: 'absolute', left: '-5000px' }}>
                                            <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
                                        </div>

                                        <div className="info pt-20"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
                            <div className="single-footer-widget">
                                <h6>Follow Us</h6>
                                <p>Let us be social</p>
                                <div className="footer-social d-flex align-items-center">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-dribbble"></i></a>
                                    <a href="#"><i className="fa fa-behance"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Index
