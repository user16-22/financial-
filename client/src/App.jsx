import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Solution from './pages/Solution';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';

// Footer pages
import Download from './pages/Download';
import Apps from './pages/Apps';
import Developer from './pages/Developer';
import Integration from './pages/Integration';
import Licence from './pages/Licence';
import Affiliate from './pages/Affiliate';
import FAQs from './pages/FAQs';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Reports from './pages/Reports';
import CookiePolicy from './pages/CookiePolicy';

function App() {
    return (
        <BrowserRouter>
            <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/solution" element={<Solution />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<SinglePost />} />

                        {/* Navigation */}
                        <Route path="/download" element={<Download />} />

                        {/* Resources */}
                        <Route path="/apps" element={<Apps />} />
                        <Route path="/developer" element={<Developer />} />
                        <Route path="/integration" element={<Integration />} />

                        {/* Support */}
                        <Route path="/licence" element={<Licence />} />
                        <Route path="/affiliate" element={<Affiliate />} />
                        <Route path="/faqs" element={<FAQs />} />

                        {/* Legal */}
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/cookie-policy" element={<CookiePolicy />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
