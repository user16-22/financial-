import { Container, Row, Col, Button, Image, Card, Accordion, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft, FaStar, FaPlus, FaMinus, FaProjectDiagram, FaSearchDollar, FaSync, FaChartLine, FaBook, FaChartBar, FaDatabase } from 'react-icons/fa';

const Solution = () => {
    return (
        <div className="overflow-hidden">
            {/* Header Section */}
            <section className="position-relative hero-gradient d-flex align-items-center justify-content-center pt-5" style={{ minHeight: '60vh', background: 'linear-gradient(135deg, #bbf49c 0%, #ffffff 100%)' }}>
                <Container className="text-center pt-5">
                    <h1 className="fw-bold mb-3 mt-5 elementor-invisible" style={{ fontSize: '4rem', color: '#1A1A1A' }}>Solution</h1>
                    <nav aria-label="breadcrumb">
                        <ul className="breadcrumb justify-content-center bg-transparent p-0 elementor-inline-items">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-dark">Home</Link></li>
                            <li className="breadcrumb-item active text-dark" aria-current="page">
                                <FaArrowRight className="mx-2" style={{ fontSize: '0.8rem' }} /> Solution
                            </li>
                        </ul>
                    </nav>
                </Container>
            </section>

            {/* Feature Highlights Grid */}
            <section className="py-5 bg-white">
                <Container className="py-5">
                    <Row className="g-4">
                        <Col lg={4} className="text-center">
                            <div className="mb-4">
                                <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-09.png" fluid className="rounded-4 shadow-sm" />
                            </div>
                            <h4 className="fw-bold mb-3" style={{ color: '#1A1A1A' }}>Personal Budgeting Made Simple</h4>
                            <p className="text-secondary small px-3">
                                With automatic expense tracking and categorized budgets, you get real-time visibility into your spending habits. Stay on track, avoid overspending, and start saving smarter.
                            </p>
                        </Col>
                        <Col lg={4} className="text-center">
                            <div className="mb-4">
                                <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-10.png" fluid className="rounded-4 shadow-sm" />
                            </div>
                            <h4 className="fw-bold mb-3" style={{ color: '#1A1A1A' }}>Smart Saving & Goal Tracking</h4>
                            <p className="text-secondary small px-3">
                                Set personalized savings goals—whether it’s for an emergency fund, vacation, or new home—and watch your progress grow with smart nudges and auto-savings options.
                            </p>
                        </Col>
                        <Col lg={4} className="text-center">
                            <div className="mb-4">
                                <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-08.png" fluid className="rounded-4 shadow-sm" />
                            </div>
                            <h4 className="fw-bold mb-3" style={{ color: '#1A1A1A' }}>Clear, Actionable Insights</h4>
                            <p className="text-secondary small px-3">
                                Get beautiful visual reports, trend analysis, and AI-powered insights that help you make confident financial decisions—no Excel expertise required.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Global Reach Section */}
            <section className="py-5 overflow-hidden" style={{ backgroundColor: '#fcfdfa' }}>
                <Container className="text-center py-5">
                    <span className="text-success fw-bold text-uppercase small mb-3 d-block" style={{ letterSpacing: '2px' }}>global reach</span>
                    <h2 className="display-4 fw-bold mb-5 mx-auto" style={{ maxWidth: '800px', color: '#1A1A1A' }}>
                        Seamless multi-currency & international transactions
                    </h2>
                    <Button variant="link" className="btn btn-dark rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center text-white text-decoration-none mb-5" style={{ backgroundColor: '#111111', borderColor: '#111111' }}>
                        <FaArrowRight className="me-2" /> Go International
                    </Button>

                    <div className="flag-carousel-container pt-5 overflow-hidden">
                        <div className="d-flex gap-4 scroll-right">
                            {/* Duplicating the array to create seamless infinite scroll effect */}
                            {[...['7306-Australia', '7310-Brazil', '7311-Canada', '7313-Chile', '7317-Czech-Republic', '7318-Denmark', '7319-Egypt', '7321-Germany', '7322-Greece', '7324-India'],
                            ...['7306-Australia', '7310-Brazil', '7311-Canada', '7313-Chile', '7317-Czech-Republic', '7318-Denmark', '7319-Egypt', '7321-Germany', '7322-Greece', '7324-India']].map((flag, idx) => (
                                <div key={`${flag}-${idx}`} className="flex-shrink-0">
                                    <Image src={`https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/${flag}.png`} style={{ width: '120px', height: 'auto', objectFit: 'contain' }} />
                                </div>
                            ))}
                        </div>
                        <div className="d-flex gap-4 scroll-left mt-4" dir="rtl">
                            {/* Duplicating the array to create seamless infinite scroll effect */}
                            {[...['7327-Italy', '7359-United-Kingdom', '7329-Jordan', '7345-Saudia-Arabia', '7342-Philippines', '7347-Singapore', '7350-South-Africa', '7360-United-States', '7351-South-Korea', '7358-United-Arab-Emirates'],
                            ...['7327-Italy', '7359-United-Kingdom', '7329-Jordan', '7345-Saudia-Arabia', '7342-Philippines', '7347-Singapore', '7350-South-Africa', '7360-United-States', '7351-South-Korea', '7358-United-Arab-Emirates']].map((flag, idx) => (
                                <div key={`${flag}-${idx}`} className="flex-shrink-0">
                                    <Image src={`https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/${flag}.png`} style={{ width: '120px', height: 'auto', objectFit: 'contain' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Investment Section */}
            <section className="py-5 mt-5">
                <Container className="p-5 rounded-5 shadow-sm" style={{ backgroundColor: '#f0fdf4', border: '1px solid #c3e6cb' }}>
                    <Row className="align-items-center g-5 mb-5 pb-5">
                        <Col lg={6}>
                            <span className="text-secondary fw-bold text-uppercase small mb-3 d-block" style={{ letterSpacing: '2px' }}>investment</span>
                            <h2 className="display-4 fw-bold mb-4" style={{ color: '#1A1A1A' }}>Grow your wealth with smart investments</h2>
                            <p className="text-secondary fs-5 mb-5">
                                Maximize your financial potential with our automated investment tools. Diversify your portfolio, track market trends, and invest with confidence—all in one platform.
                            </p>
                            <Button variant="link" className="text-success text-decoration-none fw-bold p-0 d-flex align-items-center">
                                <FaArrowRight className="me-2" /> Explore Features
                            </Button>
                        </Col>
                        <Col lg={6}>
                            <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-13.png" fluid className="rounded-4 py-5" />
                        </Col>
                    </Row>
                    <hr className="mb-5 border-success opacity-25" />
                    <Row className="g-4 text-center">
                        <Col md={4} className="mb-4">
                            <div className="p-4 h-100">
                                <span className="text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', fontSize: '2rem', backgroundColor: 'rgba(31, 75, 67, 0.1)' }}>
                                    <FaChartLine />
                                </span>
                                <h5 className="fw-bold mb-3" style={{ color: '#1A1A1A' }}>Automated wealth growth</h5>
                                <p className="text-secondary small">Let smart algorithms optimize your investments for steady financial growth</p>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="p-4 h-100">
                                <span className="text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', fontSize: '2rem', backgroundColor: 'rgba(31, 75, 67, 0.1)' }}>
                                    <FaBook />
                                </span>
                                <h5 className="fw-bold mb-3" style={{ color: '#1A1A1A' }}>Risk assessment made easy</h5>
                                <p className="text-secondary small">Get personalized risk evaluations to make smarter, data-driven investment choices</p>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="p-4 h-100">
                                <span className="text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', fontSize: '2rem', backgroundColor: 'rgba(31, 75, 67, 0.1)' }}>
                                    <FaChartBar />
                                </span>
                                <h5 className="fw-bold mb-3" style={{ color: '#1A1A1A' }}>Instant market updates</h5>
                                <p className="text-secondary small">Stay ahead with real-time insights and market trend analysis to maximize returns</p>
                            </div>
                        </Col>
                        {/* New Row of Icons */}
                        <Col md={4} className="mb-4">
                            <div className="p-4 h-100">
                                <span className="text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', fontSize: '2rem', backgroundColor: 'rgba(31, 75, 67, 0.1)' }}>
                                    <FaPlus />
                                </span>
                                <h5 className="fw-bold mb-3" style={{ color: '#1A1A1A' }}>All accounts in one place</h5>
                                <p className="text-secondary small">Let smart algorithms optimize your investments for steady financial growth</p>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="p-4 h-100">
                                <span className="text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', fontSize: '2rem', backgroundColor: 'rgba(31, 75, 67, 0.1)' }}>
                                    <FaProjectDiagram />
                                </span>
                                <h5 className="fw-bold mb-3" style={{ color: '#1A1A1A' }}>Secure & private by design</h5>
                                <p className="text-secondary small">Get personalized risk evaluations to make smarter, data-driven investment choices</p>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="p-4 h-100">
                                <span className="text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', fontSize: '2rem', backgroundColor: 'rgba(31, 75, 67, 0.1)' }}>
                                    <FaDatabase />
                                </span>
                                <h5 className="fw-bold mb-3" style={{ color: '#1A1A1A' }}>Perfect for everyone</h5>
                                <p className="text-secondary small">Stay ahead with real-time insights and market trend analysis to maximize returns</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



            <style>{`
                .hero-dashboard-carousel {
                    overflow: visible !important;
                }
                .carousel-image-item.active {
                    transform: scale(1.1);
                    z-index: 10;
                }
                .scroll-left {
                    animation: scroll-left 40s linear infinite;
                }
                .scroll-right {
                    animation: scroll-right 40s linear infinite;
                }
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .accordion-button:not(.collapsed) {
                    background-color: transparent !important;
                    color: #111111;
                }
                .testimonial-carousel .carousel-indicators [data-bs-target] {
                    background-color: #111111;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                }
            `}</style>
        </div>
    );
};

export default Solution;
