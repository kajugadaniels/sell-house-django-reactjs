import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const slides = [
        {
            title: "Thoughful Architectural Solutions",
            description: "Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus. Etiam molestie justo neque, in convallis massa tempus in.",
            image: "https://capricorn-theme.com/html/architon/assets/img/slider/slide-3.jpg"
        },
        {
            title: "Transform Space into Reality Design",
            description: "Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus. Etiam molestie justo neque, in convallis massa tempus in.",
            image: "https://capricorn-theme.com/html/architon/assets/img/slider/slide-1.jpg"
        },
        {
            title: "Creating Space for Perfect Future",
            description: "Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus. Etiam molestie justo neque, in convallis massa tempus in.",
            image: "https://capricorn-theme.com/html/architon/assets/img/slider/slider-1.jpg"
        }
    ];

    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentSlide((prevSlide) => 
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const goToSlide = (index) => {
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div id="home-2" className="relative overflow-hidden homepage-slides">
            <div 
                className="relative w-full h-full slides-container"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: 'transform 0.5s ease-in-out',
                    display: 'flex',
                    // width: `${slides.length * 100}%`
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="single-slide-item d-flex align-items-center"
                        style={{ 
                            backgroundImage: `url('${slide.image}')`,
                            width: '100%',
                            flex: '0 0 auto'
                        }}
                    >
                        <div className="hero-area-content">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-7 col-lg-8 col-md-10 col-sm-8 wow fadeInUp animated" data-wow-delay=".2s">
                                        <div className="section-title">
                                            <h1 className="text-white">{slide.title}</h1>
                                        </div>
                                        <p className="text-white">{slide.description}</p>
                                        <Link to="/about" className="mt-40 theme-btn">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="slider-nav" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => !isTransitioning && goToSlide(index)}
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            border: 'none',
                            margin: '0 5px',
                            padding: 0,
                            backgroundColor: index === currentSlide ? '#fff' : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;