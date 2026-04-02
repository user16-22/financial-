import { Container } from 'react-bootstrap';

const sections = [
    { title: 'What Are Cookies?', body: 'Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to site owners.' },
    { title: 'How We Use Cookies', body: 'Cashly uses cookies to keep you logged in, remember your preferences, understand how you use our service, and improve your experience over time.' },
    { title: 'Types of Cookies We Use', body: 'We use essential cookies (required for the site to function), performance cookies (to analyze usage), and preference cookies (to remember your settings). We do not use advertising cookies.' },
    { title: 'Managing Cookies', body: 'You can control and delete cookies through your browser settings. Note that disabling essential cookies may affect the functionality of the Cashly platform.' },
    { title: 'Third-Party Cookies', body: 'Some features may use third-party services (such as analytics providers) that set their own cookies. These are governed by the respective third-party privacy policies.' },
    { title: 'Contact Us', body: 'For questions about our cookie practices, please contact privacy@cashly.io.' },
];

const CookiePolicy = () => {
    return (
        <section className="py-5" style={{ minHeight: '80vh' }}>
            <Container className="py-5" style={{ maxWidth: '800px' }}>
                <h1 className="display-5 fw-bold mb-2" style={{ color: '#1A1A1A' }}>Cookie Policy</h1>
                <p className="text-secondary mb-5">Last updated: January 1, 2025</p>
                {sections.map(({ title, body }) => (
                    <div key={title} className="mb-4 p-4 rounded-4 bg-white shadow-sm" style={{ border: '1px solid #f0f0f0' }}>
                        <h5 className="fw-bold mb-2" style={{ color: '#1F4B43' }}>{title}</h5>
                        <p className="text-secondary mb-0">{body}</p>
                    </div>
                ))}
            </Container>
        </section>
    );
};

export default CookiePolicy;
