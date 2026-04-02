import { Container, Row, Col, Button, Image, Card, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPaw, FaGem, FaRocket, FaCheckCircle, FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa';

const Pricing = () => {
    return (
        <div className="overflow-hidden">
            {/* Header Section */}
            <section className="position-relative d-flex align-items-center justify-content-center pt-5" style={{ background: 'linear-gradient(180deg, #bbf49c 0%, #ffffff 100%)', minHeight: '400px' }}>
                <Container className="text-center pt-5">
                    <h1 className="display-3 fw-bold mb-4 mt-5" style={{ color: '#1A1A1A' }}>Pricing</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center bg-transparent p-0">
                            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-dark opacity-50">Home</Link></li>
                            <li className="breadcrumb-item text-dark opacity-50 px-2 d-flex align-items-center"><FaArrowRight size={12} /></li>
                            <li className="breadcrumb-item active text-dark fw-bold" aria-current="page">Pricing</li>
                        </ol>
                    </nav>
                </Container>
            </section>

            {/* Pricing Tiers Section */}
            <section className="py-5 bg-white">
                <Container className="py-5">
                    <Row className="g-4">
                        {/* Basic Plan */}
                        <Col lg={4}>
                            <Card className="h-100 border-0 shadow-sm p-4 rounded-5 text-center" style={{ backgroundColor: '#fcfdfa' }}>
                                <Card.Body className="p-4">
                                    <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 shadow-sm" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                                        <FaPaw />
                                    </div>
                                    <h5 className="fw-bold text-dark text-uppercase opacity-75 small mb-3" style={{ letterSpacing: '2px' }}>Basic</h5>
                                    <div className="d-flex align-items-baseline justify-content-center mb-4">
                                        <h2 className="display-4 fw-bold mb-0" style={{ color: '#1A1A1A' }}>$0</h2>
                                        <span className="ms-2 fw-bold text-secondary opacity-50">Always Free</span>
                                    </div>
                                    <p className="text-secondary small mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    <ul className="list-unstyled text-start mb-5">
                                        {[
                                            "Basic budgeting tools",
                                            "One savings goal",
                                            "Monthly summary report"
                                        ].map((item, idx) => (
                                            <li key={idx} className="mb-3 d-flex align-items-center">
                                                <FaCheckCircle className="text-dark me-3 opacity-50" />
                                                <span className="text-dark opacity-75">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-100 py-3 rounded-pill fw-bold border-0 shadow-sm" style={{ backgroundColor: '#111111' }}>Free Download</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Plus Plan (Featured) */}
                        <Col lg={4}>
                            <Card className="h-100 border-0 shadow-lg p-4 rounded-5 text-center" style={{ backgroundColor: '#ffffff', outline: '2px solid #1F4B43' }}>
                                <Card.Body className="p-4">
                                    <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 shadow-sm" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                                        <FaGem />
                                    </div>
                                    <h5 className="fw-bold text-dark text-uppercase opacity-75 small mb-3" style={{ letterSpacing: '2px' }}>Plus</h5>
                                    <div className="d-flex align-items-baseline justify-content-center mb-4">
                                        <h2 className="display-4 fw-bold mb-0" style={{ color: '#1A1A1A' }}>$29</h2>
                                        <span className="ms-2 fw-bold text-secondary opacity-50">/month</span>
                                    </div>
                                    <p className="text-secondary small mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    <ul className="list-unstyled text-start mb-5">
                                        {[
                                            "Bank account & card syncing",
                                            "Unlimited budgets & goals",
                                            "Smart insights & analysis",
                                            "Bill & budget alerts",
                                            "Export to CSV or PDF",
                                            "Priority email support"
                                        ].map((item, idx) => (
                                            <li key={idx} className="mb-3 d-flex align-items-center">
                                                <FaCheckCircle className="text-success me-3" />
                                                <span className="text-dark opacity-75">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-100 py-3 rounded-pill fw-bold border-0 shadow-sm" style={{ backgroundColor: '#1F4B43', color: '#fff' }}>Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Advance Plan */}
                        <Col lg={4}>
                            <Card className="h-100 border-0 shadow-sm p-4 rounded-5 text-center" style={{ backgroundColor: '#fcfdfa' }}>
                                <Card.Body className="p-4">
                                    <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 shadow-sm" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                                        <FaRocket />
                                    </div>
                                    <h5 className="fw-bold text-dark text-uppercase opacity-75 small mb-3" style={{ letterSpacing: '2px' }}>Advance</h5>
                                    <div className="d-flex align-items-baseline justify-content-center mb-4">
                                        <h2 className="display-4 fw-bold mb-0" style={{ color: '#1A1A1A' }}>$79</h2>
                                        <span className="ms-2 fw-bold text-secondary opacity-50">/Month</span>
                                    </div>
                                    <p className="text-secondary small mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    <ul className="list-unstyled text-start mb-5">
                                        {[
                                            "All Plus features",
                                            "Shared accounts",
                                            "Investment tracking",
                                            "Priority chat support",
                                            "Personalized coaching"
                                        ].map((item, idx) => (
                                            <li key={idx} className="mb-3 d-flex align-items-center">
                                                <FaCheckCircle className="text-dark me-3 opacity-50" />
                                                <span className="text-dark opacity-75">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-100 py-3 rounded-pill fw-bold border-0 shadow-sm" style={{ backgroundColor: '#111111' }}>Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-5 mb-5">
                <Container className="py-5 border rounded-5 shadow-sm" style={{ backgroundColor: '#fcfdfa' }}>
                    <Row className="g-5">
                        <Col lg={5} className="ps-lg-5">
                            <span className="text-success fw-bold text-uppercase small mb-3 d-block" style={{ letterSpacing: '2px' }}>frequently asked questions</span>
                            <h2 className="display-4 fw-bold mb-4" style={{ color: '#1A1A1A' }}>Your questions, answered: everything you need to know about Cashly</h2>
                        </Col>
                        <Col lg={7} className="pe-lg-5">
                            <Accordion flush defaultActiveKey="0" className="pricing-accordion">
                                {[
                                    { q: "What is this platform, and how does it work?", a: "Our fintech platform takes the hassle out of managing your money by automating transactions, offering real-time expense tracking, and delivering smart financial insights. With our intuitive tools, you can effortlessly stay on top of your finances." },
                                    { q: "Can I link multiple bank accounts?", a: "Our fintech platform takes the hassle out of managing your money by automating transactions, offering real-time expense tracking, and delivering smart financial insights. With our intuitive tools, you can effortlessly stay on top of your finances." },
                                    { q: "Does this platform support international transactions?", a: "Our fintech platform takes the hassle out of managing your money by automating transactions, offering real-time expense tracking, and delivering smart financial insights. With our intuitive tools, you can effortlessly stay on top of your finances." },
                                    { q: "How does the Smart Savings Plan work?", a: "Our fintech platform takes the hassle out of managing your money by automating transactions, offering real-time expense tracking, and delivering smart financial insights. With our intuitive tools, you can effortlessly stay on top of your finances." },
                                    { q: "What investment options do you provide?", a: "Our fintech platform takes the hassle out of managing your money by automating transactions, offering real-time expense tracking, and delivering smart financial insights. With our intuitive tools, you can effortlessly stay on top of your finances." },
                                    { q: "How does AI-driven financial planning benefit me?", a: "Our fintech platform takes the hassle out of managing your money by automating transactions, offering real-time expense tracking, and delivering smart financial insights. With our intuitive tools, you can effortlessly stay on top of your finances." },
                                    { q: "What payment methods are accepted?", a: "Our fintech platform takes the hassle out of managing your money by automating transactions, offering real-time expense tracking, and delivering smart financial insights. With our intuitive tools, you can effortlessly stay on top of your finances." }
                                ].map((item, idx) => (
                                    <Accordion.Item eventKey={String(idx)} key={idx} className="bg-transparent border-bottom py-3">
                                        <Accordion.Header className="bg-transparent fw-bold fs-5">{item.q}</Accordion.Header>
                                        <Accordion.Body className="text-secondary lh-lg">
                                            {item.a}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>

            <style>{`
                .pricing-accordion .accordion-button {
                    background-color: transparent !important;
                    box-shadow: none !important;
                    padding-left: 0;
                    padding-right: 0;
                }
                .pricing-accordion .accordion-button::after {
                    background-image: none;
                    content: '+';
                    font-size: 1.5rem;
                    color: #1F4B43;
                    transform: none;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: auto;
                    width: auto;
                }
                .pricing-accordion .accordion-button:not(.collapsed)::after {
                    content: '-';
                    transform: none;
                }
            `}</style>
        </div>
    );
};

export default Pricing;
