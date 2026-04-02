import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaHandshake, FaDollarSign, FaChartLine } from 'react-icons/fa';

const Affiliate = () => {
    return (
        <section className="py-5" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #fff 100%)', minHeight: '80vh' }}>
            <Container className="py-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3" style={{ color: '#1A1A1A' }}>Affiliate Program</h1>
                    <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '520px' }}>
                        Partner with Cashly and earn up to <strong className="text-success">30% recurring commission</strong> for every customer you refer.
                    </p>
                    <Button className="mt-3 rounded-pill px-5 py-3 border-0 fw-bold" style={{ backgroundColor: '#1F4B43', color: '#fff' }}>
                        Join the Program
                    </Button>
                </div>
                <Row className="g-4 justify-content-center mt-2">
                    {[
                        { icon: <FaHandshake size={36} />, title: 'Easy to Join', desc: 'Sign up in minutes and get your unique referral link instantly.' },
                        { icon: <FaDollarSign size={36} />, title: 'Earn Commissions', desc: 'Get paid monthly for every active subscriber you refer.' },
                        { icon: <FaChartLine size={36} />, title: 'Track Performance', desc: 'Real-time dashboard to monitor clicks, conversions, and earnings.' },
                    ].map(({ icon, title, desc }) => (
                        <Col key={title} md={4}>
                            <div className="text-center p-5 rounded-4 bg-white shadow-sm h-100"
                                style={{ border: '1px solid #f0f0f0', transition: 'transform 0.2s' }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div className="mb-3" style={{ color: '#1F4B43' }}>{icon}</div>
                                <h5 className="fw-bold">{title}</h5>
                                <p className="text-secondary small mb-0">{desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Affiliate;
