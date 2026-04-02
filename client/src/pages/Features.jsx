import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Features = () => {
    return (
        <div className="overflow-hidden">
            {/* Header Section */}
            <section className="position-relative hero-gradient d-flex align-items-center justify-content-center pt-5" style={{ minHeight: '60vh', background: 'linear-gradient(135deg, #bbf49c 0%, #ffffff 100%)' }}>
                <Container className="text-center pt-5">
                    <h1 className="fw-bold mb-3 mt-5 elementor-invisible" style={{ fontSize: '4rem', color: '#1A1A1A' }}>Features</h1>
                    <nav aria-label="breadcrumb">
                        <ul className="breadcrumb justify-content-center bg-transparent p-0 elementor-inline-items">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-dark">Home</Link></li>
                            <li className="breadcrumb-item active text-dark" aria-current="page">
                                <FaArrowRight className="mx-2" style={{ fontSize: '0.8rem' }} /> Features
                            </li>
                        </ul>
                    </nav>
                </Container>
            </section>

            {/* Feature Section 1: Effortless money management */}
            <section className="py-5 bg-white">
                <Container className="py-5">
                    <Row className="align-items-center">
                        <Col lg={6} className="pe-lg-5 mb-5 mb-lg-0">
                            <h3 className="fw-bold mb-4" style={{ fontSize: '2.5rem', color: '#1A1A1A' }}>Effortless money management</h3>
                            <p className="text-secondary mb-4 fs-5">
                                Say goodbye to spreadsheets and complexity. Our intuitive dashboard makes it easy to manage budgets, track expenses, and stay in control of your finances.
                            </p>
                            <Link to="/features" className="btn btn-dark rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center" style={{ backgroundColor: '#111111', borderColor: '#111111' }}>
                                <FaArrowRight className="me-2" /> Explore Features
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-08.png" fluid className="rounded-4 shadow-sm" />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Feature Section 2: Smart invoicing */}
            <section className="py-5 bg-white">
                <Container className="py-5">
                    <Row className="align-items-center">
                        <Col lg={6} className="pe-lg-5 mb-5 mb-lg-0">
                            <h3 className="fw-bold mb-4" style={{ fontSize: '2.5rem', color: '#1A1A1A' }}>Get paid faster with smart invoicing</h3>
                            <p className="text-secondary mb-4 fs-5">
                                Automate invoicing and accept multiple payment options effortlessly. No more chasing overdue payments—just smooth, fast transactions.
                            </p>
                            <Link to="/contact" className="btn btn-dark rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center" style={{ backgroundColor: '#111111', borderColor: '#111111' }}>
                                <FaArrowRight className="me-2" /> Start Invoicing
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-09.png" fluid className="rounded-4 shadow-sm" />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Feature Section 3: Smart savings plan */}
            <section className="py-5 bg-white">
                <Container className="py-5">
                    <Row className="align-items-center">
                        <Col lg={6} className="pe-lg-5 mb-5 mb-lg-0">
                            <h3 className="fw-bold mb-4" style={{ fontSize: '2.5rem', color: '#1A1A1A' }}>Smart savings plan for a secure future</h3>
                            <p className="text-secondary mb-4 fs-5">
                                Take control of your financial future with our automated savings plan. Set goals, track progress, and grow your savings effortlessly
                            </p>
                            <Link to="/contact" className="btn btn-dark rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center" style={{ backgroundColor: '#111111', borderColor: '#111111' }}>
                                <FaArrowRight className="me-2" /> Start Saving
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-10.png" fluid className="rounded-4 shadow-sm" />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Feature Section 4: All-in-one money hub */}
            <section className="py-5 bg-white">
                <Container className="py-5">
                    <Row className="align-items-center">
                        <Col lg={6} className="pe-lg-5 mb-5 mb-lg-0">
                            <h3 className="fw-bold mb-4" style={{ fontSize: '2.5rem', color: '#1A1A1A' }}>All-in-one money hub management</h3>
                            <p className="text-secondary mb-4 fs-5">
                                Say goodbye to spreadsheets and complexity. Our intuitive dashboard makes it easy to manage budgets, track expenses, and stay in control of your finances.
                            </p>
                            <Link to="/features" className="btn btn-dark rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center" style={{ backgroundColor: '#111111', borderColor: '#111111' }}>
                                <FaArrowRight className="me-2" /> Explore Now
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-14.png" fluid className="rounded-4 shadow-sm" />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Feature Section 5: Financial lifestyle */}
            <section className="py-5 bg-white">
                <Container className="py-5">
                    <Row className="align-items-center">
                        <Col lg={6} className="pe-lg-5 mb-5 mb-lg-0">
                            <h3 className="fw-bold mb-4" style={{ fontSize: '2.5rem', color: '#1A1A1A' }}>Designed for your financial lifestyle</h3>
                            <p className="text-secondary mb-4 fs-5">
                                Our intuitive platform automates budgeting, tracking, and reporting—so you can focus on growing your business.
                            </p>
                            <Link to="/contact" className="btn btn-dark rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center" style={{ backgroundColor: '#111111', borderColor: '#111111' }}>
                                <FaArrowRight className="me-2" /> Get Started
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-13.png" fluid className="rounded-4 shadow-sm" />
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    );
};

export default Features;
