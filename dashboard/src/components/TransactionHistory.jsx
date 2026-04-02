import { useState, useEffect } from 'react'
import { FaShoppingCart, FaUtensils, FaCar, FaHome, FaFilm, FaHeartbeat, FaWallet } from 'react-icons/fa'
import { transactionAPI } from '../services/api'

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchTransactions()
    }, [])

    const fetchTransactions = async () => {
        try {
            setLoading(true)
            const response = await transactionAPI.getAll()
            if (response.data && Array.isArray(response.data)) {
                // Map API data to component format
                const mappedTransactions = response.data.map((t, index) => ({
                    id: t._id || index,
                    title: t.title,
                    category: t.category,
                    date: new Date(t.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                    amount: t.type === 'income' ? parseFloat(t.amount) : -parseFloat(t.amount),
                    icon: getCategoryIcon(t.category),
                    color: getCategoryColor(t.category),
                    iconColor: getCategoryIconColor(t.category)
                }))
                setTransactions(mappedTransactions)
            }
        } catch (error) {
            console.error('Error fetching transactions:', error)
            // Use default sample data if API fails
            setTransactions(getDefaultTransactions())
        } finally {
            setLoading(false)
        }
    }

    const getCategoryIcon = (category) => {
        const icons = {
            'Food & Dining': <FaShoppingCart />,
            'Income': <FaWallet />,
            'Transportation': <FaCar />,
            'Housing': <FaHome />,
            'Entertainment': <FaFilm />,
            'Health & Fitness': <FaHeartbeat />,
            'Health': <FaHeartbeat />,
            'Shopping': <FaShoppingCart />,
            'Utilities': <FaHome />
        }
        return icons[category] || <FaShoppingCart />
    }

    const getCategoryColor = (category) => {
        const colors = {
            'Food & Dining': '#eff6ff',
            'Income': '#f0fdf4',
            'Transportation': '#fef2f2',
            'Housing': '#fef2f2',
            'Entertainment': '#fffbeb',
            'Health & Fitness': '#fffbeb',
            'Health': '#fffbeb',
            'Shopping': '#eff6ff',
            'Utilities': '#fef2f2'
        }
        return colors[category] || '#eff6ff'
    }

    const getCategoryIconColor = (category) => {
        const colors = {
            'Food & Dining': '#3b82f6',
            'Income': '#10b981',
            'Transportation': '#ef4444',
            'Housing': '#ef4444',
            'Entertainment': '#f59e0b',
            'Health & Fitness': '#f59e0b',
            'Health': '#f59e0b',
            'Shopping': '#3b82f6',
            'Utilities': '#ef4444'
        }
        return colors[category] || '#3b82f6'
    }

    const getDefaultTransactions = () => [
        {
            id: 1,
            title: 'Grocery Shopping',
            category: 'Food & Dining',
            date: 'Feb 10, 2026',
            amount: -125.50,
            icon: <FaShoppingCart />,
            color: '#eff6ff',
            iconColor: '#3b82f6'
        },
        {
            id: 2,
            title: 'Salary Deposit',
            category: 'Income',
            date: 'Feb 9, 2026',
            amount: 5000.00,
            icon: <FaWallet />,
            color: '#f0fdf4',
            iconColor: '#10b981'
        },
        {
            id: 3,
            title: 'Restaurant',
            category: 'Food & Dining',
            date: 'Feb 8, 2026',
            amount: -78.90,
            icon: <FaUtensils />,
            color: '#eff6ff',
            iconColor: '#3b82f6'
        }
    ]

    return (
        <div>
            <div className="page-header">
                <h2>Transaction History</h2>
                <p>View and manage all your transactions</p>
            </div>

            <div className="card">
                <div className="card-header">
                    <h3>Recent Transactions</h3>
                </div>
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <p>Loading transactions...</p>
                    </div>
                ) : (
                    <div className="transaction-list">
                        {transactions.map((transaction) => (
                            <div key={transaction.id} className="transaction-item">
                                <div className="transaction-info">
                                    <div
                                        className="transaction-icon"
                                        style={{
                                            background: transaction.color,
                                            color: transaction.iconColor
                                        }}
                                    >
                                        {transaction.icon}
                                    </div>
                                    <div className="transaction-details">
                                        <h4>{transaction.title}</h4>
                                        <p>{transaction.category} • {transaction.date}</p>
                                    </div>
                                </div>
                                <div className={`transaction-amount ${transaction.amount > 0 ? 'income' : 'expense'}`}>
                                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TransactionHistory
