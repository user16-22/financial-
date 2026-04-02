import { Container } from 'react-bootstrap';

const sections = [
    { title: '1. Acceptance of Terms', body: 'By accessing or using Cashly, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of these terms, you may not access the service.' },
    { title: '2. Use of Service', body: 'You agree to use Cashly only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the service.' },
    { title: '3. Account Responsibility', body: 'You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account.' },
    { title: '4. Intellectual Property', body: 'The content, features, and functionality of Cashly are owned by Cashly Inc. and are protected by international copyright, trademark, and other laws.' },
    { title: '5. Limitation of Liability', body: 'To the fullest extent permitted by law, Cashly shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.' },
    { title: '6. Changes to Terms', body: 'We reserve the right to modify these terms at any time. We will notify users of significant changes via email or prominent notice on the platform.' },
    { title: '7. Contact Us', body: 'If you have questions about these Terms, please contact us at legal@cashly.io.' },
];

const Terms = () => {
    return (
        <section className="py-5" style={{ minHeight: '80vh' }}>
            <Container className="py-5" style={{ maxWidth: '800px' }}>
                <h1 className="display-5 fw-bold mb-2" style={{ color: '#1A1A1A' }}>Terms & Conditions</h1>
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

export default Terms;
