import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaCommentDots, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="overflow-hidden">
            {/* Header Section */}
            <section className="position-relative hero-gradient d-flex align-items-center justify-content-center pt-5" style={{ minHeight: '60vh', background: 'linear-gradient(135deg, #bbf49c 0%, #ffffff 100%)' }}>
                <Container className="text-center pt-5">
                    <h1 className="fw-bold mb-3 mt-5" style={{ fontSize: '4.5rem', color: '#1A1A1A' }}>Contact</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center bg-transparent p-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-dark opacity-50">Home</Link></li>
                            <li className="breadcrumb-item active text-dark" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </Container>
            </section>

            {/* Contact Info Cards Section */}
            <section className="py-5 bg-white">
                <Container className="py-5">
                    <Row className="g-4">
                        <Col lg={4}>
                            <Card className="h-100 border-0 shadow-sm p-4 rounded-4" style={{ backgroundColor: '#FCFFFF' }}>
                                <Card.Body>
                                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '48px', height: '48px', opacity: 0.8 }}>
                                        <FaEnvelope className="text-white" />
                                    </div>
                                    <h4 className="fw-bold mb-3">Send Message</h4>
                                    <p className="text-secondary small mb-4">
                                        Have a question about the app or your account? We're here to help.
                                    </p>
                                    <a href="mailto:mail@cashly.io" className="text-dark fw-bold text-decoration-none d-flex align-items-center">
                                        <FaArrowRight className="me-2 small opacity-50" /> mail@cashly.io
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="h-100 border-0 shadow-sm p-4 rounded-4" style={{ backgroundColor: '#FCFFFF' }}>
                                <Card.Body>
                                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '48px', height: '48px', opacity: 0.8 }}>
                                        <FaPhone className="text-white" />
                                    </div>
                                    <h4 className="fw-bold mb-3">Let's Talk</h4>
                                    <p className="text-secondary small mb-4">
                                        Have a question about the app or your account? We're here to help.
                                    </p>
                                    <a href="tel:+123456789" className="text-dark fw-bold text-decoration-none d-flex align-items-center">
                                        <FaArrowRight className="me-2 small opacity-50" /> +123 456 789
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="h-100 border-0 shadow-sm p-4 rounded-4" style={{ backgroundColor: '#FCFFFF' }}>
                                <Card.Body>
                                    <div className="bg-success rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '48px', height: '48px', opacity: 0.8 }}>
                                        <FaCommentDots className="text-white" />
                                    </div>
                                    <h4 className="fw-bold mb-3">Chat to Us</h4>
                                    <p className="text-secondary small mb-4">
                                        Have a question about the app or your account? We're here to help.
                                    </p>
                                    <a href="#" className="text-dark fw-bold text-decoration-none d-flex align-items-center">
                                        <FaArrowRight className="me-2 small opacity-50" /> @cashly.app
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Map Section */}
            <section className="py-5">
                <Container>
                    <div className="rounded-4 overflow-hidden shadow-sm" style={{ height: '500px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540423156643!2d-0.12209358423023447!3d51.5033240796353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2suk!4v1647416345689!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="London Eye Map"
                        ></iframe>
                    </div>
                </Container>
            </section>

        </div>
    );
};

export default Contact;
