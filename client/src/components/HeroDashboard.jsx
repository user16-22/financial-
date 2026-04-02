import React from 'react';
import { Card, ProgressBar, Badge, Row, Col } from 'react-bootstrap';
import { FaWallet, FaArrowUp, FaArrowDown, FaCcVisa, FaCcMastercard, FaMobileAlt, FaCheckCircle, FaEllipsisH } from 'react-icons/fa';

const HeroDashboard = () => {
    const cardStyle = {
        borderRadius: '20px',
        border: 'none',
        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
        background: '#ffffff',
        marginBottom: '1.5rem',
        overflow: 'hidden'
    };

    const smallCardStyle = { ...cardStyle, padding: '1.5rem', minHeight: 'auto' };

    // Component: Expense Breakdown
    const ExpenseBreakdown = () => (
        <Card style={cardStyle} className="p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h6 className="fw-bold m-0">Expense Breakdown</h6>
                <small className="text-muted">Today</small>
            </div>

            <div className="position-relative mx-auto mb-5" style={{ width: '180px', height: '180px' }}>
                <div className="w-100 h-100 rounded-circle" style={{
                    background: 'conic-gradient(#1A3C34 0% 50%, #bbf49c 50% 80%, #e0e0e0 80% 100%)',
                    position: 'relative'
                }}></div>
                <div className="position-absolute bg-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '120px', height: '120px', top: '30px', left: '30px' }}>
                    <div className="text-center">
                        <small className="text-muted d-block" style={{ fontSize: '0.7rem' }}>Total Expense</small>
                        <span className="fw-bold fs-4">$1,000</span>
                        <Badge bg="success" className="bg-opacity-25 text-success rounded-pill mt-1" style={{ fontSize: '0.6rem' }}>↑ 1.5%</Badge>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                        <div style={{ width: 8, height: 8 }} className="bg-dark rounded-circle"></div>
                        <small className="fw-bold" style={{ fontSize: '0.8rem' }}>Food & Dining</small>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <span className="fw-bold text-muted" style={{ fontSize: '0.8rem' }}>$500</span>
                        <Badge bg="light" className="text-dark">50%</Badge>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                        <div style={{ width: 8, height: 8 }} className="bg-success rounded-circle"></div>
                        <small className="fw-bold" style={{ fontSize: '0.8rem' }}>Utilities</small>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <span className="fw-bold text-muted" style={{ fontSize: '0.8rem' }}>$300</span>
                        <Badge bg="light" className="text-dark">30%</Badge>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                        <div style={{ width: 8, height: 8 }} className="bg-secondary rounded-circle"></div>
                        <small className="fw-bold" style={{ fontSize: '0.8rem' }}>Investment</small>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <span className="fw-bold text-muted" style={{ fontSize: '0.8rem' }}>$200</span>
                        <Badge bg="light" className="text-dark">20%</Badge>
                    </div>
                </div>
            </div>
        </Card>
    );

    // Component: Recent Activities
    const RecentActivities = () => (
        <Card style={cardStyle} className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h6 className="fw-bold m-0">Recent Activities</h6>
                <FaEllipsisH className="text-muted" />
            </div>
            <div className="d-flex gap-3 mb-4">
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40, minWidth: 40 }}>
                    <FaMobileAlt className="text-success" />
                </div>
                <div>
                    <small className="text-muted d-block" style={{ fontSize: '0.7rem' }}>Today, 9:22 AM</small>
                    <span className="fw-bold" style={{ fontSize: '0.85rem', lineHeight: '1.2' }}>Checked account balance</span>
                </div>
            </div>
            <div className="d-flex gap-3 mb-4">
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40, minWidth: 40 }}>
                    <FaCheckCircle className="text-secondary" />
                </div>
                <div>
                    <small className="text-muted d-block" style={{ fontSize: '0.7rem' }}>Yesterday, 5:50 PM</small>
                    <span className="fw-bold" style={{ fontSize: '0.85rem', lineHeight: '1.2' }}>Scheduled utility payment</span>
                </div>
            </div>
            <div className="d-flex gap-3">
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40, minWidth: 40 }}>
                    <FaWallet className="text-warning" />
                </div>
                <div>
                    <small className="text-muted d-block" style={{ fontSize: '0.7rem' }}>Yesterday, 3:30 PM</small>
                    <span className="fw-bold" style={{ fontSize: '0.85rem', lineHeight: '1.2' }}>Updated payment method</span>
                </div>
            </div>
        </Card>
    );

    // Component: Income & Saving Plans
    const IncomeSaving = () => (
        <div className="d-flex flex-column gap-3">
            <Card style={smallCardStyle} className="flex-fill justify-content-center mb-0">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="d-flex align-items-center gap-2">
                        <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: 30, height: 30 }}>
                            <FaWallet className="text-success" size={14} />
                        </div>
                        <span className="fw-bold text-secondary">Income</span>
                    </div>
                    <Badge bg="success" className="bg-opacity-25 text-success rounded-pill">+ 1.78%</Badge>
                </div>
                <h3 className="fw-bold mb-0 text-dark">$8,500</h3>
                <small className="text-success fw-bold">+ $355 <span className="text-muted fw-normal">than last week</span></small>
            </Card>

            <Card style={smallCardStyle} className='mb-0'>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <span className="fw-bold d-block">Saving Plans</span>
                        <small className="text-secondary">Total Savings</small>
                    </div>
                    <button className="btn btn-sm btn-outline-primary rounded-pill" style={{ fontSize: '0.7rem' }}>+ Add</button>
                </div>
                <h3 className="fw-bold mb-4">$12,000</h3>

                <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                        <small className="fw-bold text-secondary" style={{ fontSize: '0.7rem' }}>Emergency Fund</small>
                    </div>
                    <ProgressBar variant="dark" now={45} style={{ height: '6px' }} className="mb-1" />
                    <div className="d-flex justify-content-between">
                        <small className="text-muted fw-bold" style={{ fontSize: '0.7rem' }}>$4,500</small>
                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>45%</small>
                    </div>
                </div>

                <div>
                    <div className="d-flex justify-content-between mb-1">
                        <small className="fw-bold text-secondary" style={{ fontSize: '0.7rem' }}>Retirement Fund</small>
                    </div>
                    <ProgressBar variant="success" now={25} style={{ height: '6px' }} className="mb-1" />
                    <div className="d-flex justify-content-between">
                        <small className="text-muted fw-bold" style={{ fontSize: '0.7rem' }}>$5,000</small>
                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>25%</small>
                    </div>
                </div>
            </Card>
        </div>
    );

    // Component: Finance Score & Stats
    const FinanceScore = () => (
        <div className="d-flex flex-column gap-3">
            <Card style={smallCardStyle} className="flex-fill mb-0">
                <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="fw-bold">Finance Score</span>
                    <FaEllipsisH className="text-muted" />
                </div>
                <small className="text-secondary">Finance Quality</small>
                <div className="d-flex justify-content-between align-items-end mb-2">
                    <h4 className="fw-bold text-success m-0">Excellent</h4>
                    <span className="fw-bold fs-4">92%</span>
                </div>
                <div className="d-flex gap-1" style={{ height: '8px' }}>
                    <div className="rounded-start w-75 bg-dark"></div>
                    <div className="rounded-end w-25 bg-success opacity-50"></div>
                </div>
            </Card>

            <Card className="flex-fill p-3 border-0 shadow-sm rounded-4 mb-0" style={{ boxShadow: smallCardStyle.boxShadow }}>
                <div className="d-flex justify-content-between mb-2">
                    <div className="d-flex align-items-center gap-2">
                        <div className="bg-light p-1 rounded"><FaArrowDown className="text-danger" size={10} /></div>
                        <small className="fw-bold text-secondary">Expense</small>
                    </div>
                    <Badge bg="danger" className="bg-opacity-10 text-danger rounded-pill" style={{ fontSize: '0.6rem' }}>↓ 2.45%</Badge>
                </div>
                <div className="d-flex justify-content-between align-items-end">
                    <h2 className="fw-bold mb-0 text-dark">$4,900</h2>
                    <small className="text-muted fw-bold" style={{ fontSize: '0.65rem' }}>-$126 <span className="fw-normal">than last week</span></small>
                </div>
            </Card>
            <Card className="flex-fill p-3 border-0 shadow-sm rounded-4 mb-0" style={{ boxShadow: smallCardStyle.boxShadow }}>
                <div className="d-flex justify-content-between mb-2">
                    <div className="d-flex align-items-center gap-2">
                        <div className="bg-light p-1 rounded"><FaArrowUp className="text-success" size={10} /></div>
                        <small className="fw-bold text-secondary">Savings</small>
                    </div>
                    <Badge bg="success" className="bg-opacity-25 text-success rounded-pill" style={{ fontSize: '0.6rem' }}>↑ 1.5%</Badge>
                </div>
                <div className="d-flex justify-content-between align-items-end">
                    <h2 className="fw-bold mb-0 text-dark">$2,000</h2>
                    <small className="text-success fw-bold" style={{ fontSize: '0.65rem' }}>+$30 <span className="text-muted fw-normal">than last week</span></small>
                </div>
            </Card>
        </div>
    );

    // Component: Balance & Cards
    const BalanceCards = () => (
        <Card style={cardStyle} className="p-0 border-0 bg-transparent shadow-none h-auto">
            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
                <div>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="fw-bold text-secondary">Balance</span>
                        <FaEllipsisH className="text-muted" />
                    </div>
                    <small className="text-secondary d-block">Total Balance</small>
                    <h2 className="fw-bold mb-4">$1,377,000</h2>
                </div>

                <div className="d-flex flex-column gap-3">
                    {/* Visa Card */}
                    <div className="p-3 rounded-3 text-white d-flex justify-content-between align-items-center" style={{ backgroundColor: '#1A3C34' }}>
                        <div className="d-flex align-items-center gap-3">
                            <div className="d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: 40, height: 40 }}>
                                <FaCcVisa size={24} className="text-dark" />
                            </div>
                            <div style={{ lineHeight: '1' }}>
                                <small className="d-block opacity-75" style={{ fontSize: '0.7rem' }}>Platinum Plus</small>
                                <span className="fw-bold">$415,000</span>
                            </div>
                        </div>
                        <div className="text-end">
                            <small className="d-block opacity-50" style={{ fontSize: '0.6rem' }}>**** 9967</small>
                        </div>
                    </div>

                    {/* Freedom Card */}
                    <div className="p-3 rounded-3 text-dark d-flex justify-content-between align-items-center" style={{ backgroundColor: '#E8F5E9' }}>
                        <div className="d-flex align-items-center gap-3">
                            <div className="d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: 40, height: 40 }}>
                                <FaCcMastercard size={24} className="text-dark" />
                            </div>
                            <div style={{ lineHeight: '1' }}>
                                <small className="d-block text-secondary" style={{ fontSize: '0.7rem' }}>Freedom Unlimited</small>
                                <span className="fw-bold">$532,000</span>
                            </div>
                        </div>
                        <div className="text-end">
                            <small className="d-block text-secondary" style={{ fontSize: '0.6rem' }}>**** 5487</small>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );

    // Component: Investment Card
    const InvestmentCard = () => (
        <Card className="flex-fill p-4 border-0 shadow-sm rounded-4 bg-white justify-content-center" style={cardStyle}>
            <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center gap-2">
                    <div className="bg-light p-1 rounded"><FaArrowUp className="text-success" size={10} /></div>
                    <small className="fw-bold text-secondary">Investment</small>
                </div>
                <Badge bg="success" className="bg-opacity-25 text-success rounded-pill">↑ 3.85%</Badge>
            </div>
            <div className="d-flex justify-content-between align-items-end">
                <h2 className="fw-bold mb-0 text-dark">$1,600</h2>
                <small className="text-success fw-bold">+$64 <span className="text-muted fw-normal">than last week</span></small>
            </div>
        </Card>
    );

    // Define the dashboard columns/items for the slider
    const items = [
        <div style={{ width: '100%', height: '100%' }}><ExpenseBreakdown /></div>,
        <div style={{ width: '100%', height: '100%' }}><FinanceScore /></div>,
        <div style={{ width: '100%', height: '100%' }}><BalanceCards /></div>,
        <div style={{ width: '100%', height: '100%' }}><InvestmentCard /></div>,
        <div style={{ width: '100%', height: '100%' }}><RecentActivities /></div>,
        <div style={{ width: '100%', height: '100%' }}><IncomeSaving /></div>
    ];

    // Carousel Logic
    const [index, setIndex] = React.useState(0);
    const [transitionEnabled, setTransitionEnabled] = React.useState(true);
    const timeoutRef = React.useRef(null);
    const itemsToShow = 5;
    const totalItems = items.length;

    // Duplicate items for infinite scroll effect
    // For Right-To-Left slide (moving right side visually means items enter from left?)
    // "Slider move right side" -> items travel ->>> way.
    // So we need to decrement index.
    const extendedItems = [...items, ...items, ...items]; // Triple buffer for safety

    const prevSlide = () => {
        setIndex((prevIndex) => prevIndex - 1);
    };

    
    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => prevSlide(),
            5000
        );
           
        return () => {
            resetTimeout();
        };
    }, [index]);
    
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    // Handle infinite loop logic
    const handleTransitionEnd = () => {
        if (index <= 0) {
            setTransitionEnabled(false);
            setIndex(totalItems);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setTransitionEnabled(true);
                });
            });
        }
    };

    // Initialize index at totalItems to allow moving left (visually right) immediately
    React.useEffect(() => {
        setIndex(totalItems);
    }, []);

    return (
        <div className="hero-dashboard-carousel-container" style={{ maxWidth: '100%', overflow: 'visible', paddingBottom: '3rem' }}>
            <div
                className="carousel-track d-flex"
                style={{
                    transform: `translateX(-${index * (100 / itemsToShow)}%)`,
                    transition: transitionEnabled ? 'transform 4s ease-in-out' : 'none',
                    width: `${(extendedItems.length / itemsToShow) * 100}%`
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {extendedItems.map((item, idx) => (
                    <div
                        key={idx}
                        style={{
                            width: `${100 / extendedItems.length}%`,
                            padding: '0 10px',
                            flexShrink: 0
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
            {/* Dots */}
            <div className="d-flex justify-content-center gap-2 mt-3">
                {items.map((_, idx) => (
                    <div
                        key={idx}
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor: (index % totalItems) === idx ? '#1F4B43' : '#cbd5e0',
                            transition: 'background-color 0.3s'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default HeroDashboard; 


