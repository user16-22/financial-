import { Container, Row, Col } from 'react-bootstrap';
import { FaStripe, FaPaypal, FaAmazon, FaShopify, FaSlack, FaGoogle } from 'react-icons/fa';

const integrations = [
    { icon: <FaStripe size={36} />, name: 'Stripe', desc: 'Connect payments and sync transactions automatically.', color: '#635bff' },
    { icon: <FaPaypal size={36} />, name: 'PayPal', desc: 'Import PayPal transactions in real time.', color: '#003087' },
    { icon: <FaAmazon size={36} />, name: 'Amazon', desc: 'Track Amazon spending and categorize purchases.', color: '#ff9900' },
    { icon: <FaShopify size={36} />, name: 'Shopify', desc: 'Sync your Shopify store revenue and expenses.', color: '#96bf48' },
    { icon: <FaSlack size={36} />, name: 'Slack', desc: 'Get budget alerts and reports directly in Slack.', color: '#4a154b' },
    { icon: <FaGoogle size={36} />, name: 'Google Sheets', desc: 'Export financial reports to Google Sheets.', color: '#34a853' },
];

const Integration = () => {
    return (
        <section className="py-5" style={{ background: '#f8fafc', minHeight: '80vh' }}>
            <Container className="py-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3" style={{ color: '#1A1A1A' }}>Integrations</h1>
                    <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '520px' }}>
                        Connect Cashly with the tools you already use. No coding required.
                    </p>
                </div>
                <Row className="g-4">
                    {integrations.map(({ icon, name, desc, color }) => (
                        <Col key={name} md={6} lg={4}>
                            <div className="p-4 rounded-4 bg-white shadow-sm h-100 d-flex gap-3 align-items-start"
                                style={{ border: '1px solid #f0f0f0', transition: 'transform 0.2s' }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ color, flexShrink: 0 }}>{icon}</div>
                                <div>
                                    <h6 className="fw-bold mb-1">{name}</h6>
                                    <p className="text-secondary small mb-0">{desc}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Integration;
