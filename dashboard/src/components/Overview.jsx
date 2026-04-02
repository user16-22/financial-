import { useState, useEffect } from 'react'
import { FaWallet, FaArrowUp, FaArrowDown, FaPiggyBank, FaChartLine } from 'react-icons/fa'
import Modal from './Modal'
import AddTransactionForm from './AddTransactionForm'
import SetBudgetForm from './SetBudgetForm'
import ViewReportsForm from './ViewReportsForm'
import { dashboardAPI, transactionAPI, budgetAPI, reportAPI } from '../services/api'

const Overview = () => {
    const [activeModal, setActiveModal] = useState(null)
    const [stats, setStats] = useState([
        {
            label: 'Total Balance',
            value: '$45,678.90',
            change: '+12.5%',
            positive: true,
            icon: <FaWallet />,
            color: 'green'
        },
        {
            label: 'Income',
            value: '$12,450.00',
            change: '+8.2%',
            positive: true,
            icon: <FaArrowUp />,
            color: 'blue'
        },
        {
            label: 'Expenses',
            value: '$8,234.50',
            change: '+3.1%',
            positive: false,
            icon: <FaArrowDown />,
            color: 'red'
        },
        {
            label: 'Savings',
            value: '$15,890.25',
            change: '+15.7%',
            positive: true,
            icon: <FaPiggyBank />,
            color: 'yellow'
        }
    ])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchDashboardStats()
    }, [])

    const fetchDashboardStats = async () => {
        try {
            setLoading(true)
            const response = await dashboardAPI.getStats()
            if (response.data) {
                // Update stats with real data from API
                const apiStats = response.data
                setStats([
                    {
                        label: 'Total Balance',
                        value: `$${apiStats.totalBalance?.toFixed(2) || '0.00'}`,
                        change: apiStats.balanceChange || '+0%',
                        positive: apiStats.balanceChange?.includes('+'),
                        icon: <FaWallet />,
                        color: 'green'
                    },
                    {
                        label: 'Income',
                        value: `$${apiStats.totalIncome?.toFixed(2) || '0.00'}`,
                        change: apiStats.incomeChange || '+0%',
                        positive: apiStats.incomeChange?.includes('+'),
                        icon: <FaArrowUp />,
                        color: 'blue'
                    },
                    {
                        label: 'Expenses',
                        value: `$${apiStats.totalExpenses?.toFixed(2) || '0.00'}`,
                        change: apiStats.expensesChange || '+0%',
                        positive: false,
                        icon: <FaArrowDown />,
                        color: 'red'
                    },
                    {
                        label: 'Savings',
                        value: `$${apiStats.totalSavings?.toFixed(2) || '0.00'}`,
                        change: apiStats.savingsChange || '+0%',
                        positive: apiStats.savingsChange?.includes('+'),
                        icon: <FaPiggyBank />,
                        color: 'yellow'
                    }
                ])
            }
        } catch (error) {
            console.error('Error fetching dashboard stats:', error)
            // Keep default stats if API fails
        } finally {
            setLoading(false)
        }
    }

    const handleAddTransaction = async (data) => {
        try {
            const response = await transactionAPI.create(data)
            console.log('Transaction created:', response.data)
            alert('Transaction added successfully!')
            // Refresh dashboard stats
            fetchDashboardStats()
        } catch (error) {
            console.error('Error creating transaction:', error)
            alert('Failed to add transaction. Please try again.')
        }
    }

    const handleSetBudget = async (data) => {
        try {
            const response = await budgetAPI.create(data)
            console.log('Budget created:', response.data)
            alert('Budget set successfully!')
        } catch (error) {
            console.error('Error setting budget:', error)
            alert('Failed to set budget. Please try again.')
        }
    }

    const handleGenerateReport = async (data) => {
        try {
            const response = await reportAPI.generate(data)
            console.log('Report generated:', response.data)
            alert(`${data.reportType.charAt(0).toUpperCase() + data.reportType.slice(1)} report generated successfully!`)
        } catch (error) {
            console.error('Error generating report:', error)
            alert('Failed to generate report. Please try again.')
        }
    }

    return (
        <div>
            <div className="page-header">
                <h2>Dashboard Overview</h2>
                <p>Welcome back! Here's your financial summary</p>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <p>Loading dashboard data...</p>
                </div>
            ) : (
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-card-header">
                                <div>
                                    <div className="stat-card-label">{stat.label}</div>
                                    <div className="stat-card-value">{stat.value}</div>
                                    <div className={`stat-card-change ${stat.positive ? 'positive' : 'negative'}`}>
                                        <FaChartLine />
                                        <span>{stat.change} from last month</span>
                                    </div>
                                </div>
                                <div className={`stat-card-icon ${stat.color}`}>
                                    {stat.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="card">
                <div className="card-header">
                    <h3>Quick Actions</h3>
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button
                        onClick={() => setActiveModal('addTransaction')}
                        style={{
                            padding: '0.75rem 1.5rem',
                            background: '#1F4B43',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: '600'
                        }}
                    >
                        Add Transaction
                    </button>
                    <button
                        onClick={() => setActiveModal('setBudget')}
                        style={{
                            padding: '0.75rem 1.5rem',
                            background: '#f0fdf4',
                            color: '#1F4B43',
                            border: '1px solid #1F4B43',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: '600'
                        }}
                    >
                        Set Budget
                    </button>
                    <button
                        onClick={() => setActiveModal('viewReports')}
                        style={{
                            padding: '0.75rem 1.5rem',
                            background: '#f0fdf4',
                            color: '#1F4B43',
                            border: '1px solid #1F4B43',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: '600'
                        }}
                    >
                        View Reports
                    </button>
                </div>
            </div>

            <Modal
                isOpen={activeModal === 'addTransaction'}
                onClose={() => setActiveModal(null)}
                title="Add New Transaction"
            >
                <AddTransactionForm
                    onClose={() => setActiveModal(null)}
                    onSubmit={handleAddTransaction}
                />
            </Modal>

            <Modal
                isOpen={activeModal === 'setBudget'}
                onClose={() => setActiveModal(null)}
                title="Set Budget"
            >
                <SetBudgetForm
                    onClose={() => setActiveModal(null)}
                    onSubmit={handleSetBudget}
                />
            </Modal>

            <Modal
                isOpen={activeModal === 'viewReports'}
                onClose={() => setActiveModal(null)}
                title="Generate Report"
            >
                <ViewReportsForm
                    onClose={() => setActiveModal(null)}
                    onGenerate={handleGenerateReport}
                />
            </Modal>
        </div>
    )
}

export default Overview
