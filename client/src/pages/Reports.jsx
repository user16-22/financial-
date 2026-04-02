import { Container, Row, Col } from 'react-bootstrap';
import { FaChartBar, FaFileDownload, FaCalendarAlt, FaTags } from 'react-icons/fa';

const features = [
    { icon: <FaChartBar size={32} />, title: 'Spending Reports', desc: 'Visual breakdowns of where your money goes each month.' },
    { icon: <FaFileDownload size={32} />, title: 'Export Reports', desc: 'Download reports in PDF, CSV, or Excel format anytime.' },
    { icon: <FaCalendarAlt size={32} />, title: 'Monthly Summaries', desc: 'Automated monthly financial summaries delivered to your inbox.' },
    { icon: <FaTags size={32} />, title: 'Category Insights', desc: 'Understand spending trends across custom categories.' },
];

const Reports = () => {
    return (
        <section className="py-5" style={{ background: '#f8fafc', minHeight: '80vh' }}>
            <Container className="py-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3" style={{ color: '#1A1A1A' }}>Financial Reports</h1>
                    <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '520px' }}>
                        Gain deep insights into your financial health with powerful, customizable reports.
                    </p>
                </div>
                <Row className="g-4 justify-content-center">
                    {features.map(({ icon, title, desc }) => (
                        <Col key={title} md={6} lg={3}>
                            <div className="p-4 rounded-4 bg-white shadow-sm h-100 text-center"
                                style={{ border: '1px solid #f0f0f0', transition: 'transform 0.2s' }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div className="mb-3" style={{ color: '#1F4B43' }}>{icon}</div>
                                <h6 className="fw-bold">{title}</h6>
                                <p className="text-secondary small mb-0">{desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Reports;
