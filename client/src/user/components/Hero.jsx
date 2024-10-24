import React from 'react'

const Hero = () => {
    return (
        <div className="hero-area section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-9">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h1>
                                    We’re focused on creating new innovative space.
                                </h1>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 wow fadeInUp" data-wow-delay=".6s">
                        <div className="p-animation">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">

                <div className="hero-img-wrap mt-30 wow fadeInUp animated" data-wow-delay=".6s">
                    <img src="https://capricorn-theme.com/html/architon/assets/img/slider/slide-3.jpg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Hero