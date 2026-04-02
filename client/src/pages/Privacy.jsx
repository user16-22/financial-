import { Container } from 'react-bootstrap';

const sections = [
    { title: '1. Information We Collect', body: 'We collect information you provide directly to us, such as when you create an account, connect a bank, or contact support. We also collect usage data and device information automatically.' },
    { title: '2. How We Use Your Information', body: 'We use your information to provide, maintain, and improve the Cashly service, send transactional emails, and personalize your experience.' },
    { title: '3. Data Sharing', body: 'We do not sell your personal information. We may share your data with trusted service providers who assist us in operating the platform, under strict confidentiality agreements.' },
    { title: '4. Data Security', body: 'We implement industry-standard security measures including 256-bit AES encryption, secure HTTPS connections, and regular security audits.' },
    { title: '5. Cookies', body: 'We use cookies to improve your experience, analyze usage patterns, and enable certain features. You can control cookies through your browser settings.' },
    { title: '6. Your Rights', body: 'You have the right to access, update, or delete your personal data at any time from Settings or by contacting us at privacy@cashly.io.' },
    { title: '7. Contact', body: 'For privacy-related questions, contact our Data Protection Officer at privacy@cashly.io.' },
];

const Privacy = () => {
    return (
        <section className="py-5" style={{ minHeight: '80vh' }}>
            <Container className="py-5" style={{ maxWidth: '800px' }}>
                <h1 className="display-5 fw-bold mb-2" style={{ color: '#1A1A1A' }}>Privacy Policy</h1>
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

export default Privacy;
