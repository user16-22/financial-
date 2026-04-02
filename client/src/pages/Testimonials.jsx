import { Container, Row, Col, Card } from 'react-bootstrap';

const testimonials = [
    { name: "Alice Johnson", role: "Freelancer", text: "Cashly changed the way I handle my invoices. It's a lifesaver!" },
    { name: "Bob Smith", role: "CEO, TechCorp", text: "The analytics feature gave us insights we never had before." },
    { name: "Charlie Davis", role: "Small Business Owner", text: "Customer support is top-notch. Highly recommended." }
];

const Testimonials = () => {
    return (
        <Container className="py-5">
            <h1 className="text-center fw-bold mb-5">What Our Users Say</h1>
            <Row>
                {testimonials.map((t, index) => (
                    <Col md={4} className="mb-4" key={index}>
                        <Card className="h-100 border-0 shadow-sm p-4">
                            <Card.Body>
                                <Card.Text className="fst-italic">"{t.text}"</Card.Text>
                                <div className="mt-4">
                                    <h6 className="fw-bold mb-0">{t.name}</h6>
                                    <small className="text-muted">{t.role}</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Testimonials;
