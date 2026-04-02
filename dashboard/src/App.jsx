import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Overview from './components/Overview'
import TransactionHistory from './components/TransactionHistory'
import BudgetTracker from './components/BudgetTracker'
import Analytics from './components/Analytics'

function App() {
    const [activeSection, setActiveSection] = useState('overview')

    const renderContent = () => {
        switch (activeSection) {
            case 'overview':
                return <Overview />
            case 'transactions':
                return <TransactionHistory />
            case 'budget':
                return <BudgetTracker />
            case 'analytics':
                return <Analytics />
            default:
                return <Overview />
        }
    }

    return (
        <div className="app">
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            <main className="main-content">
                {renderContent()}
            </main>
        </div>
    )
}

export default App
