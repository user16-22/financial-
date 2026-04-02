import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaApple, FaGooglePlay, FaWindows, FaDownload } from 'react-icons/fa';

const Download = () => {
    return (
        <section className="py-5" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #fff 100%)', minHeight: '80vh' }}>
            <Container className="py-5">
                <div className="text-center mb-5">
                    <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: '#e6f4f0', color: '#1F4B43', fontSize: '0.85rem' }}>
                        <FaDownload className="me-2" />Download
                    </span>
                    <h1 className="display-4 fw-bold mb-3" style={{ color: '#1A1A1A' }}>Get Cashly on Any Device</h1>
                    <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '560px' }}>
                        Download Cashly and take control of your finances from your phone, tablet, or desktop.
                    </p>
                </div>
                <Row className="g-4 justify-content-center">
                    {[
                        { icon: <FaApple size={40} />, label: 'App Store', sub: 'Download for iOS', color: '#1A1A1A' },
                        { icon: <FaGooglePlay size={40} />, label: 'Google Play', sub: 'Download for Android', color: '#1F4B43' },
                        { icon: <FaWindows size={40} />, label: 'Windows', sub: 'Download for Desktop', color: '#2563eb' },
                    ].map(({ icon, label, sub, color }) => (
                        <Col key={label} md={4}>
                            <div className="text-center p-5 rounded-4 bg-white shadow-sm h-100 d-flex flex-column align-items-center justify-content-center gap-3"
                                style={{ border: '1px solid #f0f0f0', transition: 'transform 0.2s' }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ color }}>{icon}</div>
                                <h5 className="fw-bold mb-0">{label}</h5>
                                <p className="text-secondary small mb-0">{sub}</p>
                                <Button className="rounded-pill px-4 border-0" style={{ backgroundColor: color, color: '#fff' }}>
                                    Download
                                </Button>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Download;
