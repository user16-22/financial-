import { FaChartLine, FaExchangeAlt, FaWallet, FaChartPie } from 'react-icons/fa'

const Sidebar = ({ activeSection, setActiveSection }) => {
    const navItems = [
        { id: 'overview', label: 'Overview', icon: <FaChartLine /> },
        { id: 'transactions', label: 'Transactions', icon: <FaExchangeAlt /> },
        { id: 'budget', label: 'Budget', icon: <FaWallet /> },
        { id: 'analytics', label: 'Analytics', icon: <FaChartPie /> },
    ]

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h1>💰 FinDash</h1>
            </div>
            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => setActiveSection(item.id)}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar
