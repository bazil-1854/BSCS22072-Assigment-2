import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Generic = () => {
    return (
        <div>
            <Navbar />
            <section className="generic-banner relative">
                <div className="container">
                    <div className="row height align-items-center justify-content-center">
                        <div className="col-lg-10">
                            <div className="generic-banner-content">
                                <h2 className="text-white">The Generic Page</h2>
                                <p className="text-white">It won’t be a bigger problem to find one video game lover in your <br />
                                    neighbor. Since the introduction of Virtual Game.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='main-wrapper'>
                <section className="video-sec-area pt-100" id="about">
                    <div className="container">
                        <div className="row justify-content-start align-items-center">
                            <div className="col-lg-6 video-right justify-content-center align-items-center d-flex">
                                <div className="overlay overlay-bg"></div>
                                <a className="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM"><img className="img-fluid"
                                    src="img/play-icon.png" alt="" /></a>
                            </div>
                            <div className="col-lg-6 video-left">
                                <h6>Live Coffee making process.</h6>
                                <h1>We Telecast our <br />
                                    Coffee Making Live</h1>
                                <p><span>We are here to listen from you deliver exellence</span></p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim.
                                </p>
                                <img className="img-fluid" src="img/signature.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-generic-area section-gap">
                    <div className="container border-top-generic">
                        <h3 className="about-title mb-30">Elaboration about Generic Page</h3>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="img-text">
                                    <img src="img/a.jpg" alt="" className="img-fluid float-left mr-20 mb-20" />
                                    <p>Recently, the US Federal government banned online casinos from operating in America by
                                        making it illegal to transfer money to them through any US bank or payment system. As a
                                        result of this law, most of the popular online casino networks such as Party Gaming and
                                        PlayTech left the United States. Overnight, online casino players found themselves being
                                        chased by the Federal government. But, after a fortnight, the online casino industry
                                        came up with a solution and new online casinos started taking root. These began to
                                        operate under a different business umbrella, and by doing that, rendered the transfer of
                                        money to and from them legal. A major part of this was enlisting electronic banking
                                        systems that would accept this new clarification and start doing business with me.
                                        Listed in this article are the electronic banking systems that accept players from the
                                        United States that wish to play in online casinos.</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <p>Recently, the US Federal government banned online casinos from operating in America by making
                                    it illegal to transfer money to them through any US bank or payment system. As a result of
                                    this law, most of the popular online casino networks such as Party Gaming and PlayTech left
                                    the United States. Overnight, online casino players found themselves being chased by the
                                    Federal government. But, after a fortnight, the online casino industry came up with a
                                    solution and new online casinos started taking root. These began to operate under a
                                    different business umbrella, and by doing that, rendered the transfer of money to and from
                                    them legal. A major part of this was enlisting electronic banking systems that would accept
                                    this new clarification and start doing business with me. Listed in this article are the
                                    electronic banking systems that accept players from the United States that wish to play in
                                    online casinos.</p>
                            </div>
                            <div className="col-lg-12">
                                <p>Recently, the US Federal government banned online casinos from operating in America by making
                                    it illegal to transfer money to them through any US bank or payment system. As a result of
                                    this law, most of the popular online casino networks such as Party Gaming and PlayTech left
                                    the United States. Overnight, online casino players found themselves being chased by the
                                    Federal government. But, after a fortnight, the online casino industry came up with a
                                    solution and new online casinos started taking root. These began to operate under a
                                    different business umbrella, and by doing that, rendered the transfer of money to and from
                                    them legal. A major part of this was enlisting electronic banking systems that would accept
                                    this new clarification and start doing business with me. Listed in this article are the
                                    electronic banking systems that accept players from the United States that wish to play in
                                    online casinos.</p>
                            </div>
                            <div className="col-md-12">
                                <div className="img-text">
                                    <img src="img/a2.jpg" alt="" className="img-fluid float-left mr-20 mb-20" />
                                    <p>Recently, the US Federal government banned online casinos from operating in America by
                                        making it illegal to transfer money to them through any US bank or payment system. As a
                                        result of this law, most of the popular online casino networks such as Party Gaming and
                                        PlayTech left the United States. Overnight, online casino players found themselves being
                                        chased by the Federal government. But, after a fortnight, the online casino industry
                                        came up with a solution and new online casinos started taking root. These began to
                                        operate under a different business umbrella, and by doing that, rendered the transfer of
                                        money to and from them legal. A major part of this was enlisting electronic banking
                                        systems that would accept this new clarification and start doing business with me.
                                        Listed in this article are the electronic banking systems that accept players from the
                                        United States that wish to play in online casinos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Generic
