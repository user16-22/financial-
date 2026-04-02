import { Container } from 'react-bootstrap';

const Licence = () => {
    return (
        <section className="py-5" style={{ minHeight: '80vh' }}>
            <Container className="py-5" style={{ maxWidth: '800px' }}>
                <h1 className="display-5 fw-bold mb-2" style={{ color: '#1A1A1A' }}>Licence Agreement</h1>
                <p className="text-secondary mb-5">Effective date: January 1, 2025</p>

                {[
                    { title: '1. Grant of Licence', body: 'Cashly grants you a limited, non-exclusive, non-transferable, revocable licence to access and use the Service strictly in accordance with these terms.' },
                    { title: '2. Restrictions', body: 'You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any part of the Cashly platform without our prior written consent.' },
                    { title: '3. Intellectual Property', body: 'All trademarks, service marks, logos, and content on the Cashly platform are the exclusive property of Cashly Inc. or its licensors.' },
                    { title: '4. Termination', body: 'This licence is effective until terminated. Your rights under this licence will terminate automatically if you fail to comply with any of its terms.' },
                    { title: '5. Contact', body: 'For licensing inquiries, please contact legal@cashly.io.' },
                ].map(({ title, body }) => (
                    <div key={title} className="mb-4 p-4 rounded-4 bg-white shadow-sm" style={{ border: '1px solid #f0f0f0' }}>
                        <h5 className="fw-bold mb-2" style={{ color: '#1F4B43' }}>{title}</h5>
                        <p className="text-secondary mb-0">{body}</p>
                    </div>
                ))}
            </Container>
        </section>
    );
};

export default Licence;
