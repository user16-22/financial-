import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCreditCard, FaChevronDown } from 'react-icons/fa';

const Navigation = () => {
    return (
        <Navbar bg="transparent" expand="lg" className="py-3 position-absolute top-0 w-100" style={{ zIndex: 10 }}>
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 d-flex align-items-center" style={{ color: '#0f3d37' }}>
                    <FaCreditCard className="me-2" />
                    Cashly
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto fw-medium">
                        <Nav.Link as={Link} to="/" className="mx-3 text-dark">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="mx-3 text-dark">About</Nav.Link>
                        <Nav.Link as={Link} to="/features" className="mx-3 text-dark">Features</Nav.Link>
                        <Nav.Link as={Link} to="/solution" className="mx-3 text-dark">Solution</Nav.Link>
                        <Nav.Link as={Link} to="/pricing" className="mx-3 text-dark">Pricing</Nav.Link>
                    </Nav>
                    <div>
                        <Button className="btn-primary border-0 px-4 py-2" as={Link} to="/contact" style={{ backgroundColor: '#1F4B43' }}>Get Started</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
