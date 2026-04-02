import { Container, Row, Col, Button, Image, Accordion, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroDashboard from '../components/HeroDashboard';
import { FaArrowRight, FaCheckCircle, FaStar, FaGlobe, FaLock, FaChartLine, FaEnvelope } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="position-relative hero-gradient d-flex align-items-center justify-content-center pt-5" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #bbf49c 0%, #ffffff 100%)' }}>
                <Container className="text-center pt-5 mt-5">
                    <h1 className="fw-bold mb-4" style={{ fontSize: '4.5rem', lineHeight: '1.2', color: '#1A1A1A' }}>
                        Effortless Financial Management
                    </h1>
                    <p className="text-secondary mb-5 mx-auto" style={{ maxWidth: '800px', fontSize: '1.25rem' }}>
                        Take control of your finances without the hassle. Our intuitive platform automates budgeting, tracking, and reporting—so you can focus on growing your business.
                    </p>
                    <div className="mb-5">
                        <Button className="btn-primary rounded px-5 py-3 fw-bold" style={{ backgroundColor: '#111111', border: 'none' }} as={Link} to="/contact">Get Started</Button>
                    </div>

                    {/* Hero Dashboard Images - Static Grid */}
                    <div className="overflow-visible" style={{ marginTop: '4rem' }}>
                        <HeroDashboard />
                    </div>
                </Container>
            </section>

            {/* Sub-header Section (key features) */}
            <section className="py-5 bg-white separator-border">
                <Container className="text-center py-5">
                    <span className="text-success fw-bold text-uppercase small mb-3 d-block">key features</span>
                    <h2 className="fw-bold mb-4 mx-auto" style={{ maxWidth: '900px', fontSize: '3rem', color: '#1A1A1A' }}>
                        Next-level financial tools designed to streamline, automate, and scale your business effortlessly
                    </h2>
                    <Link to="/features" className="text-success text-decoration-none fw-bold d-flex align-items-center justify-content-center">
                        Explore <FaArrowRight className="ms-2" />
                    </Link>
                </Container>
            </section>

            {/* Feature Showcase Rows */}
            <section className="py-5 bg-white">
                <Container>
                    {/* Row 1: Effortless money management */}
                    <Row className="align-items-center mb-5 py-5 rounded-4" style={{ backgroundColor: '#f9fafb' }}>
                        <Col lg={5} className="mb-5 mb-lg-0 ps-lg-5">
                            <h3 className="fw-bold mb-4" style={{ fontSize: '2.5rem', color: '#1A1A1A' }}>Effortless money management</h3>
                            <p className="text-secondary mb-4 fs-5">
                                Say goodbye to spreadsheets and complexity. Our intuitive dashboard makes it easy to manage budgets, track expenses, and stay in control of your finances.
                            </p>
                            <Link to="/features" className="text-success text-decoration-none fw-bold d-flex align-items-center">
                                Explore Features <FaArrowRight className="ms-2" />
                            </Link>
                        </Col>
                        <Col lg={7}>
                            <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-08.png" fluid className="shadow-sm rounded" />
                        </Col>
                    </Row>

                    {/* Row 2: Get paid faster with smart invoicing */}
                    <Row className="align-items-center mb-5 py-5 rounded-4" style={{ backgroundColor: '#f9fafb' }}>
                        <Col lg={5} className="mb-5 mb-lg-0 ps-lg-5">
                            <h3 className="fw-bold mb-4" style={{ fontSize: '2.5rem', color: '#1A1A1A' }}>Get paid faster with smart invoicing</h3>
                            <p className="text-secondary mb-4 fs-5">
                                Automate invoicing and accept multiple payment options effortlessly. No more chasing overdue payments—just smooth, fast transactions.
                            </p>
                            <Link to="/contact" className="text-success text-decoration-none fw-bold d-flex align-items-center">
                                Start Invoicing <FaArrowRight className="ms-2" />
                            </Link>
                        </Col>
                        <Col lg={7}>
                            <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-09.png" fluid className="shadow-sm rounded" />
                        </Col>
                    </Row>

                    {/* Row 3: Smart savings plan */}
                    <Row className="align-items-center mb-5 py-5 rounded-4" style={{ backgroundColor: '#f9fafb' }}>
                        <Col lg={5} className="mb-5 mb-lg-0 ps-lg-5">
                            <h3 className="fw-bold mb-4" style={{ fontSize: '2.5rem', color: '#1A1A1A' }}>Smart savings plan for a secure future</h3>
                            <p className="text-secondary mb-4 fs-5">
                                Take control of your financial future with our automated savings plan. Set goals, track progress, and grow your savings effortlessly
                            </p>
                            <Link to="/contact" className="text-success text-decoration-none fw-bold d-flex align-items-center">
                                Start Saving <FaArrowRight className="ms-2" />
                            </Link>
                        </Col>
                        <Col lg={7}>
                            <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-10.png" fluid className="shadow-sm rounded" />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Why Cashly Section */}
            <section className="py-5 bg-white">
                <Container className="py-5">
                    <Row className="align-items-center">
                        <Col lg={6} className="position-relative mb-5 mb-lg-0">
                            <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/middle-aged-professional-businessman-wearing-white-2025-01-16-23-39-12-utc.webp" fluid className="rounded shadow" />
                            <div className="position-absolute" style={{ top: '10%', right: '10%', width: '40%' }}>
                                <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-11.png" fluid className="shadow-lg rounded" />
                            </div>
                            <div className="position-absolute shadow-lg rounded" style={{ bottom: '10%', left: '-5%', width: '40%', background: '#fff' }}>
                                <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-12.png" fluid className="rounded" />
                            </div>
                        </Col>
                        <Col lg={6} className="ps-lg-5">
                            <span className="text-success fw-bold text-uppercase small mb-3 d-block">WHY Cashly</span>
                            <h2 className="display-5 fw-bold mb-4" style={{ color: '#1A1A1A' }}>Redefining finance — Empower your financial journey</h2>
                            <p className="text-secondary mb-4 fs-5">
                                Experience complete financial control with our cutting-edge automation, industry-leading security, and real-time analytics. Say goodbye to manual processes and hidden costs—our transparent, flexible pricing ensures you only pay for what you need, with no surprises
                            </p>
                            <Button variant="outline-dark" className="px-5 py-3 fw-bold rounded" as={Link} to="/about">Get Started</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Global Reach Section */}
            <section className="py-5 bg-white text-center border-top border-bottom">
                <Container className="py-5 px-0" fluid>
                    <div className="mb-5">
                        <span className="text-secondary fw-bold text-uppercase small mb-3 d-block" style={{ letterSpacing: '1px' }}>global reach</span>
                        <h2 className="fw-bold mb-4 mx-auto" style={{ maxWidth: '800px', fontSize: '3.5rem', color: '#1A1A1A' }}>
                            Seamless multi-currency & international transactions
                        </h2>
                        <Link to="/features" className="text-success text-decoration-none fw-bold d-flex align-items-center justify-content-center">
                            <FaArrowRight className="me-2" /> Go International
                        </Link>
                    </div>

                    <div className="flag-rows-animated overflow-hidden">
                        {/* Row 1: Right to Left (Germany to Czech Republic) */}
                        <div className="scroll-container mb-4">
                            <div className="scroll-content scroll-left">
                                {[
                                    '7321-Germany', '7322-Greece', '7324-India', '7306-Australia',
                                    '7310-Brazil', '7311-Canada', '7313-Chile', '7317-Czech-Republic'
                                ].concat([
                                    '7321-Germany', '7322-Greece', '7324-India', '7306-Australia',
                                    '7310-Brazil', '7311-Canada', '7313-Chile', '7317-Czech-Republic'
                                ]).map((slug, idx) => (
                                    <Image key={`row1-${slug}-${idx}`} src={`https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/${slug}.png`} style={{ width: '140px', height: 'auto', objectFit: 'contain' }} className="shadow-sm" />
                                ))}
                            </div>
                        </div>

                        {/* Row 2: Left to Right (Philippines to South Africa) */}
                        <div className="scroll-container">
                            <div className="scroll-content scroll-right">
                                {[
                                    '7342-Philippines', '7345-Saudia-Arabia', '7329-Jordan', '7359-United-Kingdom',
                                    '7327-Italy', '7358-United-Arab-Emirates', '7351-South-Korea', '7360-United-States', '7350-South-Africa'
                                ].concat([
                                    '7342-Philippines', '7345-Saudia-Arabia', '7329-Jordan', '7359-United-Kingdom',
                                    '7327-Italy', '7358-United-Arab-Emirates', '7351-South-Korea', '7360-United-States', '7350-South-Africa'
                                ]).map((slug, idx) => (
                                    <Image key={`row2-${slug}-${idx}`} src={`https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/${slug}.png`} style={{ width: '140px', height: 'auto', objectFit: 'contain' }} className="shadow-sm" />
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Investment Section */}
            <section className="py-5" style={{ backgroundColor: '#f0fdf4', borderTop: '1px solid #c3e6cb', borderBottom: '1px solid #c3e6cb' }}>
                <Container className="py-5">
                    <Row className="align-items-center mb-5">
                        <Col lg={5} className="mb-5 mb-lg-0">
                            <span className="fw-bold text-uppercase small mb-3 d-block" style={{ color: '#1F4B43', letterSpacing: '1px' }}>investment</span>
                            <h2 className="fw-bold mb-4" style={{ color: '#1A1A1A', fontSize: '3rem' }}>Grow your wealth with smart investments</h2>
                            <p className="text-secondary mb-4 fs-5" style={{ maxWidth: '450px' }}>
                                Maximize your financial potential with our automated investment tools. Diversify your portfolio, track market trends, and invest with confidence—all in one platform.
                            </p>
                            <Link to="/features" className="text-success text-decoration-none fw-bold d-inline-flex align-items-center mt-2 fs-5">
                                <FaArrowRight className="me-2" /> Explore Features
                            </Link>
                        </Col>
                        <Col lg={7} className="text-end">
                            <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-13.png" fluid className="shadow-sm rounded" style={{ maxWidth: '90%' }} />
                        </Col>
                    </Row>
                    <div className="py-4 border-top" style={{ borderColor: 'rgba(0,0,0,0.05)' }}></div>
                    <Row className="gy-4 pt-3">
                        {[
                            { title: "Automated wealth growth", desc: "Let smart algorithms optimize your investments for steady financial growth", icon: <FaChartLine size={28} /> },
                            { title: "Risk assessment made easy", desc: "Get personalized risk evaluations to make smarter, data-driven investment choices", icon: <FaLock size={28} /> },
                            { title: "Instant market updates", desc: "Stay ahead with real-time insights and market trend analysis to maximize returns", icon: <FaChartLine size={28} /> }
                        ].map((item, idx) => (
                            <Col key={idx} md={4}>
                                <div className="text-start">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '64px', height: '64px', backgroundColor: '#e6f4f0', color: '#1F4B43' }}>
                                        {item.icon}
                                    </div>
                                    <h4 className="fw-bold mb-3 h5" style={{ color: '#1A1A1A' }}>{item.title}</h4>
                                    <p className="text-secondary small fs-6">{item.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Testimonials */}
            <section className="py-5 bg-white text-center">
                <Container className="py-5">
                    <span className="text-success fw-bold text-uppercase small mb-3 d-block">What they says about us</span>
                    <div className="mx-auto" style={{ maxWidth: '900px' }}>
                        <div className="text-warning mb-4 fs-4">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <h3 className="fw-bold mb-5" style={{ fontSize: '2rem', lineHeight: '1.4', color: '#1A1A1A' }}>
                            "This platform has completely transformed the way I manage my finances. I no longer stress about budgeting or tracking expenses—everything is automated and seamless. Highly recommend!"
                        </h3>
                        <div className="d-flex flex-column align-items-center">
                            <Image src="https://live.sociolib.com/cashly/wp-content/uploads/sites/12/2025/05/cashly-author-1.jpg" roundedCircle className="mb-3" style={{ width: '60px' }} />
                            <h6 className="fw-bold mb-0">John Doe</h6>
                            <small className="text-secondary">Linkedin</small>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-5 bg-light">
                <Container className="py-5">
                    <div className="text-center mb-5">
                        <span className="text-success fw-bold text-uppercase small mb-3 d-block">frequently asked questions</span>
                        <h2 className="fw-bold display-6 mx-auto" style={{ maxWidth: '800px', color: '#1A1A1A' }}>
                            Your questions, answered: everything you need to know about Cashly
                        </h2>
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <Accordion flush className="modern-accordion">
                                {[
                                    { q: "What is this platform, and how does it work?", a: "Our fintech platform takes the hassle out of managing your money by automating transactions, offering real-time expense tracking, and delivering smart financial insights. With our intuitive tools, you can effortlessly stay on top of your finances, gain better control over your cash flow, and make informed decisions that help you grow your wealth." },
                                    { q: "Can I link multiple bank accounts?", a: "Our fintech platform takes the hassle out of managing your money by automating transactions, offering real-time expense tracking, and delivering smart financial insights. With our intuitive tools, you can effortlessly stay on top of your finances, gain better control over your cash flow, and make informed decisions that help you grow your wealth." },
                                    { q: "Does this platform support international transactions?", a: "Our fintech platform takes the hassle out of managing your money by automating transactions, offering real-time expense tracking, and delivering smart financial insights. With our intuitive tools, you can effortlessly stay on top of your finances, gain better control over your cash flow, and make informed decisions that help you grow your wealth." },
                                    { q: "How does the Smart Savings Plan work?", a: "Our fintech platform takes the hassle out of managing your money by automating transactions, offering real-time expense tracking, and delivering smart financial insights. With our intuitive tools, you can effortlessly stay on top of your finances, gain better control over your cash flow, and make informed decisions that help you grow your wealth." },
                                    { q: "What investment options do you provide?", a: "Our fintech platform takes the hassle out of managing your money by automating transactions, offering real-time expense tracking, and delivering smart financial insights. With our intuitive tools, you can effortlessly stay on top of your finances, gain better control over your cash flow, and make informed decisions that help you grow your wealth." },
                                    { q: "How does AI-driven financial planning benefit me?", a: "Our fintech platform takes the hassle out of managing your money by automating transactions, offering real-time expense tracking, and delivering smart financial insights. With our intuitive tools, you can effortlessly stay on top of your finances, gain better control over your cash flow, and make informed decisions that help you grow your wealth." },
                                    { q: "What payment methods are accepted?", a: "Our fintech platform takes the hassle out of managing your money by automating transactions, offering real-time expense tracking, and delivering smart financial insights. With our intuitive tools, you can effortlessly stay on top of your finances, gain better control over your cash flow, and make informed decisions that help you grow your wealth." }
                                ].map((item, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index} className="mb-3 border-bottom bg-transparent">
                                        <Accordion.Header className="fw-bold fs-5">{item.q}</Accordion.Header>
                                        <Accordion.Body className="text-secondary">{item.a}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    );
};

export default Home;
