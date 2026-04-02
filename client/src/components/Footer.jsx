import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok, FaCreditCard } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-section bg-white">
            {/* Top CTA Section */}
            <section className="py-5 border-bottom">
                <Container className="py-5">
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                        <h2 className="display-5 fw-bold mb-4 mb-md-0" style={{ color: '#1F2937', maxWidth: '600px' }}>
                            Take control of your finances today!
                        </h2>
                        <Button
                            as={Link}
                            to="/contact"
                            className="px-5 py-3 border-0 rounded-3 fw-bold"
                            style={{ backgroundColor: '#1F4B43', color: '#fff' }}
                        >
                            Get Started
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Navigation Section */}
            <section className="py-5">
                <Container className="py-5">
                    <Row className="g-4">
                        {/* Column 1: Brand */}
                        <Col lg={3} md={6}>
                            <div className="d-flex align-items-center gap-2 mb-4">
                                <FaCreditCard className="text-dark fs-4" />
                                <h4 className="fw-bold mb-0" style={{ color: '#1A1A1A' }}>Cashly</h4>
                            </div>
                            <p className="text-secondary small mb-0" style={{ lineHeight: '1.8' }}>
                                Cashly. Amphitheater Parkway,<br />
                                Mountain View, 53142
                            </p>
                        </Col>

                        {/* Column 2: Navigation */}
                        <Col lg={2} md={6}>
                            <h6 className="text-uppercase fw-bold text-secondary small mb-4" style={{ letterSpacing: '1px' }}>navigation</h6>
                            <ul className="list-unstyled footer-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/features">Features</Link></li>
                                <li><Link to="/download">Download</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                            </ul>
                        </Col>

                        {/* Column 3: Resources */}
                        <Col lg={2} md={6}>
                            <h6 className="text-uppercase fw-bold text-secondary small mb-4" style={{ letterSpacing: '1px' }}>resources</h6>
                            <ul className="list-unstyled footer-links">
                                <li><Link to="/apps">Apps</Link></li>
                                <li><Link to="/developer">Developer</Link></li>
                                <li><Link to="/integration">Integration</Link></li>
                                <li><Link to="/solution">Solution</Link></li>
                            </ul>
                        </Col>

                        {/* Column 4: Support */}
                        <Col lg={2} md={6}>
                            <h6 className="text-uppercase fw-bold text-secondary small mb-4" style={{ letterSpacing: '1px' }}>support</h6>
                            <ul className="list-unstyled footer-links">
                                <li><Link to="/licence">Licence</Link></li>
                                <li><Link to="/contact">Get Started</Link></li>
                                <li><Link to="/affiliate">Affiliate</Link></li>
                                <li><Link to="/faqs">FAQs</Link></li>
                            </ul>
                        </Col>

                        {/* Column 5: Legal */}
                        <Col lg={3} md={6}>
                            <h6 className="text-uppercase fw-bold text-secondary small mb-4" style={{ letterSpacing: '1px' }}>legal</h6>
                            <ul className="list-unstyled footer-links">
                                <li><Link to="/terms">Terms & Conditions</Link></li>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                                <li><Link to="/reports">Reports</Link></li>
                                <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Bottom Bar */}
            <section className="py-4 border-top">
                <Container>
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                        <p className="text-secondary small mb-3 mb-md-0">
                            Powered by SocioLib
                        </p>
                        <div className="d-flex gap-4">
                            <a href="#" className="text-dark fs-5"><FaInstagram /></a>
                            <a href="#" className="text-dark fs-5"><FaFacebook /></a>
                            <a href="#" className="text-dark fs-5"><FaYoutube /></a>
                            <a href="#" className="text-dark fs-5"><FaTiktok /></a>
                        </div>
                    </div>
                </Container>
            </section>

            <style>{`
                .footer-links li {
                    margin-bottom: 0.8rem;
                    position: relative;
                    padding-left: 1.2rem;
                }
                .footer-links li::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 6px;
                    height: 6px;
                    background-color: #6c757d;
                    border-radius: 50%;
                    opacity: 0.5;
                }
                .footer-links a {
                    text-decoration: none;
                    color: #1A1A1A;
                    font-size: 0.95rem;
                }
                .footer-links a:hover {
                    color: #1F4B43;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
