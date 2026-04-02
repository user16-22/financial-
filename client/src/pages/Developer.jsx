import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaKey, FaBook, FaRocket } from 'react-icons/fa';

const resources = [
    { icon: <FaBook size={28} />, title: 'API Reference', desc: 'Full documentation for all Cashly REST API endpoints.' },
    { icon: <FaKey size={28} />, title: 'Authentication', desc: 'Learn how to authenticate your requests using OAuth 2.0.' },
    { icon: <FaCode size={28} />, title: 'SDKs & Libraries', desc: 'Official SDKs for JavaScript, Python, PHP, and more.' },
    { icon: <FaRocket size={28} />, title: 'Quick Start', desc: 'Integrate Cashly into your product in under 5 minutes.' },
];

const Developer = () => {
    return (
        <section className="py-5" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #fff 100%)', minHeight: '80vh' }}>
            <Container className="py-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3" style={{ color: '#1A1A1A' }}>Developer Hub</h1>
                    <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '520px' }}>
                        Build powerful financial tools with the Cashly API.
                    </p>
                    <div className="d-inline-block px-4 py-2 rounded-3 mt-2" style={{ background: '#e6f4f0', color: '#1F4B43', border: '1px solid #c3e6cb', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                        Base URL: <strong>https://api.cashly.io/v1</strong>
                    </div>
                </div>
                <Row className="g-4">
                    {resources.map(({ icon, title, desc }) => (
                        <Col key={title} md={6}>
                            <div className="p-4 rounded-4 h-100 d-flex gap-4 align-items-start hover-up"
                                style={{ background: '#fff', border: '1px solid #f0f0f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}
                            >
                                <div className="p-3 rounded-3 flex-shrink-0" style={{ background: '#e6f4f0', color: '#1F4B43' }}>
                                    {icon}
                                </div>
                                <div>
                                    <h5 className="fw-bold" style={{ color: '#1A1A1A' }}>{title}</h5>
                                    <p className="text-secondary mb-0 small">{desc}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Developer;
