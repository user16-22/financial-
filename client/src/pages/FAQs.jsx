import { Container, Accordion } from 'react-bootstrap';

const faqs = [
    { q: 'What is Cashly?', a: 'Cashly is an all-in-one personal finance platform that helps you track expenses, manage budgets, and grow your savings.' },
    { q: 'Is my financial data secure?', a: 'Yes. Cashly uses bank-level 256-bit AES encryption and two-factor authentication to keep your data safe.' },
    { q: 'How do I connect my bank account?', a: 'Go to Settings → Connected Accounts and search for your bank. We support over 10,000 financial institutions.' },
    { q: 'Can I export my data?', a: 'Yes. You can export transactions and reports in CSV, PDF, or Excel format from the Reports section.' },
    { q: 'What plans are available?', a: 'We offer a Free plan, a Pro plan at $9.99/month, and an Enterprise plan for teams. Visit our Pricing page for details.' },
    { q: 'How do I cancel my subscription?', a: 'You can cancel anytime from Settings → Billing. You will retain access until the end of your billing period.' },
];

const FAQs = () => {
    return (
        <section className="py-5" style={{ background: '#f8fafc', minHeight: '80vh' }}>
            <Container className="py-5" style={{ maxWidth: '760px' }}>
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3" style={{ color: '#1A1A1A' }}>Frequently Asked Questions</h1>
                    <p className="text-secondary fs-5">Everything you need to know about Cashly.</p>
                </div>
                <Accordion flush>
                    {faqs.map(({ q, a }, i) => (
                        <Accordion.Item key={i} eventKey={String(i)} className="mb-3 rounded-4 overflow-hidden shadow-sm" style={{ border: '1px solid #f0f0f0' }}>
                            <Accordion.Header>
                                <span className="fw-bold" style={{ color: '#1A1A1A' }}>{q}</span>
                            </Accordion.Header>
                            <Accordion.Body className="text-secondary">{a}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </section>
    );
};

export default FAQs;
