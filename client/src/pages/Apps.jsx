import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMobileAlt, FaDesktop, FaTabletAlt, FaApple } from 'react-icons/fa';

const Apps = () => {
    const appData = [
        { icon: <FaMobileAlt size={36} />, name: 'Cashly Mobile', desc: 'Manage your finances on the go with our powerful mobile app.', platform: 'iOS & Android', color: '#1F4B43' },
        { icon: <FaDesktop size={36} />, name: 'Cashly Desktop', desc: 'Full-featured financial management from your desktop.', platform: 'Windows & Mac', color: '#2563eb' },
        { icon: <FaTabletAlt size={36} />, name: 'Cashly Tablet', desc: 'Optimized dashboard experience for tablets.', platform: 'iPad & Android Tablet', color: '#7c3aed' },
        { icon: <FaApple size={36} />, name: 'Cashly Watch', desc: 'Quick balance checks and alerts on your wrist.', platform: 'Apple Watch', color: '#dc2626' },
    ];

    return (
        <section className="py-5" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #fff 100%)', minHeight: '80vh' }}>
            <Container className="py-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3" style={{ color: '#1A1A1A' }}>Cashly Apps</h1>
                    <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '540px' }}>
                        Available on all your favorite platforms. One account, every device.
                    </p>
                </div>
                <Row className="g-4">
                    {appData.map((app) => (
                        <Col key={app.name} md={6} lg={3}>
                            <div className="p-4 rounded-4 bg-white shadow-sm h-100 hover-up"
                                style={{ border: '1px solid #f0f0f0' }}
                            >
                                <div className="mb-3 p-3 rounded-3 d-inline-flex" style={{ backgroundColor: app.color + '18' }}>
                                    <span style={{ color: app.color }}>{app.icon}</span>
                                </div>
                                <h5 className="fw-bold">{app.name}</h5>
                                <p className="text-secondary small">{app.desc}</p>
                                <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: app.color + '15', color: app.color }}>
                                    {app.platform}
                                </span>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Apps;
