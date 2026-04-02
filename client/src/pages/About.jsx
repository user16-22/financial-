import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Image, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const ImageCarousel = () => {
    const items = [
        "https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-07.png",
        "https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-04.png",
        "https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-06.png",
        "https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-03.png",
        "https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-02.png"
    ];

    const [index, setIndex] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const timeoutRef = useRef(null);
    const itemsToShow = 5;
    const totalItems = items.length;

    // Triple buffer for infinite scroll
    const extendedItems = [...items, ...items, ...items];

    const nextSlide = () => {
        setIndex((prevIndex) => prevIndex + 1);
    };

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => nextSlide(),
            5000
        );
        return () => resetTimeout();
    }, [index]);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const handleTransitionEnd = () => {
        if (index >= 2 * totalItems) {
            setTransitionEnabled(false);
            setIndex(totalItems);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setTransitionEnabled(true);
                });
            });
        }
    };

    React.useEffect(() => {
        setIndex(totalItems);
    }, []);

    return (
        <div style={{ overflow: 'hidden', width: '100%' }}>
            <div
                className="d-flex"
                style={{
                    transform: `translateX(-${index * (100 / itemsToShow)}%)`,
                    transition: transitionEnabled ? 'transform 4s ease-in-out' : 'none',
                    width: `${(extendedItems.length / itemsToShow) * 100}%`
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {extendedItems.map((src, idx) => (
                    <div key={idx} style={{ width: `${100 / extendedItems.length}%`, padding: '0 10px' }}>
                        <Image src={src} fluid className="rounded-4 shadow" />
                    </div>
                ))}
            </div>
            {/* Dots */}
            <div className="d-flex justify-content-center gap-2 mt-5">
                {items.map((_, idx) => (
                    <div
                        key={idx}
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            backgroundColor: (index % totalItems) === idx ? '#111111' : '#cbd5e0',
                            transition: 'background-color 0.3s'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div className="overflow-hidden">
            {/* Header Section */}
            <section className="position-relative hero-gradient d-flex align-items-center justify-content-center pt-5" style={{ minHeight: '60vh', background: 'linear-gradient(135deg, #bbf49c 0%, #ffffff 100%)' }}>
                <Container className="text-center pt-5">
                    <h1 className="fw-bold mb-3 mt-5 elementor-invisible" style={{ fontSize: '4rem', color: '#1A1A1A' }}>About</h1>
                    <nav aria-label="breadcrumb">
                        <ul className="breadcrumb justify-content-center bg-transparent p-0 elementor-inline-items">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-dark">Home</Link></li>
                            <li className="breadcrumb-item active text-dark" aria-current="page">
                                <FaArrowRight className="mx-2" style={{ fontSize: '0.8rem' }} /> About
                            </li>
                        </ul>
                    </nav>
                </Container>
            </section>

            {/* Who We Are Section */}
            <section className="py-5 bg-white">
                <Container className="py-5">
                    <Row className="align-items-center">
                        <Col lg={6} className="pe-lg-5">
                            <h6 className="text-success fw-bold text-uppercase small mb-3">who we are</h6>
                            <h2 className="display-5 fw-bold mb-4" style={{ color: '#1A1A1A', lineHeight: '1.2' }}>We’re on a mission to simplify personal finance</h2>
                            <div className="text-secondary mb-4 fs-5">
                                <p>We’re a team of designers, developers, and finance nerds who believe money management shouldn’t be intimidating.</p>
                                <p>Whether you're budgeting for your first apartment or optimizing your investment portfolio, we’re here to help you take control with confidence.</p>
                            </div>
                            <div className="testimonial-box p-4 border-0 mb-4" style={{ backgroundColor: 'transparent' }}>
                                <p className="fw-medium mb-4 fs-5 text-dark" style={{ borderLeft: 'none' }}>
                                    "Our vision is helping millions build healthier money habits and brighter futures."
                                </p>
                                <div className="d-flex align-items-center gap-3">
                                    <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-author-2.jpg" width={60} height={60} roundedCircle />
                                    <div>
                                        <h6 className="fw-bold mb-0">John Doe</h6>
                                        <p className="text-secondary small mb-0">President</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="position-relative mt-5 mt-lg-0">
                            <div className="main-image-wrapper">
                                <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/hand-holding-phone-cashly.webp" fluid className="rounded-4" />
                            </div>
                            <Image
                                src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-06.png"
                                className="position-absolute shadow-lg rounded-3"
                                style={{ width: '60%', bottom: '10%', right: '-5%', zIndex: 2 }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* The Screen Section: Carousel */}
            <section className="py-5 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)' }}>
                <Container className="text-center py-5">
                    <div className="mb-5">
                        <span className="text-success fw-bold text-uppercase small mb-3 d-block" style={{ letterSpacing: '2px' }}>the screen</span>
                        <h2 className="display-4 fw-bold mb-4 mx-auto" style={{ maxWidth: '800px', color: '#1A1A1A' }}>
                            Let’s Build Your Financial Future—Together
                        </h2>
                        <Link to="/features" className="btn btn-dark rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center" style={{ backgroundColor: '#111111', borderColor: '#111111' }}>
                            <FaArrowRight className="me-2" /> Our Features
                        </Link>
                    </div>

                    <div className="the-screen-showcase-wrapper position-relative py-5">
                        <ImageCarousel />
                    </div>
                </Container>
            </section>

            {/* Why Cashly Section */}
            <section className="py-5 bg-white">
                <Container className="py-5">
                    <Row className="align-items-center">
                        <Col lg={6} className="position-relative mb-5 mb-lg-0 order-2 order-lg-1">
                            <div className="main-image-wrapper">
                                <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/middle-aged-professional-businessman-wearing-white-2025-01-16-23-39-12-utc.webp" fluid className="rounded-4 shadow" />
                            </div>
                            <Image
                                src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-11.png"
                                className="position-absolute shadow-lg rounded-3"
                                style={{ width: '40%', top: '10%', right: '10%', zIndex: 2 }}
                            />
                            <Image
                                src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-12.png"
                                className="position-absolute shadow-lg rounded-3"
                                style={{ width: '40%', bottom: '10%', left: '-5%', background: '#fff', zIndex: 3 }}
                            />
                        </Col>
                        <Col lg={6} className="ps-lg-5 order-1 order-lg-2">
                            <h6 className="text-success fw-bold text-uppercase small mb-3">WHY Cashly</h6>
                            <h2 className="display-5 fw-bold mb-4" style={{ color: '#1A1A1A' }}>Redefining finance — Empower your financial journey</h2>
                            <div className="text-secondary mb-4 fs-5">
                                <p>Experience complete financial control with our cutting-edge automation, industry-leading security, and real-time analytics.</p>
                                <p>Say goodbye to manual processes and hidden costs—our transparent, flexible pricing ensures you only pay for what you need, with no surprises</p>
                            </div>
                            <Row>
                                <Col sm={6}>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-3 d-flex align-items-center"><FaCheckCircle className="text-success me-3" /> Clarity is Power</li>
                                        <li className="mb-3 d-flex align-items-center"><FaCheckCircle className="text-success me-3" /> Privacy First</li>
                                    </ul>
                                </Col>
                                <Col sm={6}>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-3 d-flex align-items-center"><FaCheckCircle className="text-success me-3" /> Tools That Work</li>
                                        <li className="mb-3 d-flex align-items-center"><FaCheckCircle className="text-success me-3" /> Finance for All</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    );
};

export default About;
