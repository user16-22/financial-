import { useState, useEffect } from 'react'
import { budgetAPI } from '../services/api'

const BudgetTracker = () => {
    const [budgets, setBudgets] = useState([])
    const [loading, setLoading] = useState(true)
    const [totalBudget, setTotalBudget] = useState(2050)
    const [totalSpent, setTotalSpent] = useState(1520)

    useEffect(() => {
        fetchBudgets()
    }, [])

    const fetchBudgets = async () => {
        try {
            setLoading(true)
            const response = await budgetAPI.getAll()
            if (response.data && Array.isArray(response.data)) {
                // Map API data to component format
                const mappedBudgets = response.data.map(b => ({
                    category: b.category,
                    spent: parseFloat(b.spent || 0),
                    budget: parseFloat(b.amount),
                    percentage: Math.round((parseFloat(b.spent || 0) / parseFloat(b.amount)) * 100)
                }))
                setBudgets(mappedBudgets)

                // Calculate totals
                const total = mappedBudgets.reduce((sum, b) => sum + b.budget, 0)
                const spent = mappedBudgets.reduce((sum, b) => sum + b.spent, 0)
                setTotalBudget(total)
                setTotalSpent(spent)
            }
        } catch (error) {
            console.error('Error fetching budgets:', error)
            // Use default sample data if API fails
            setBudgets(getDefaultBudgets())
        } finally {
            setLoading(false)
        }
    }

    const getDefaultBudgets = () => [
        {
            category: 'Food & Dining',
            spent: 450,
            budget: 600,
            percentage: 75
        },
        {
            category: 'Transportation',
            spent: 180,
            budget: 300,
            percentage: 60
        },
        {
            category: 'Entertainment',
            spent: 120,
            budget: 200,
            percentage: 60
        },
        {
            category: 'Shopping',
            spent: 340,
            budget: 400,
            percentage: 85
        },
        {
            category: 'Health & Fitness',
            spent: 150,
            budget: 250,
            percentage: 60
        },
        {
            category: 'Utilities',
            spent: 280,
            budget: 300,
            percentage: 93
        }
    ]

    const getProgressColor = (percentage) => {
        if (percentage < 70) return 'low'
        if (percentage < 90) return 'medium'
        return 'high'
    }

    const remaining = totalBudget - totalSpent
    const percentageUsed = Math.round((totalSpent / totalBudget) * 100)

    return (
        <div>
            <div className="page-header">
                <h2>Budget Tracker</h2>
                <p>Monitor your spending across different categories</p>
            </div>

            <div className="card">
                <div className="card-header">
                    <h3>Monthly Budget Overview</h3>
                </div>
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <p>Loading budget data...</p>
                    </div>
                ) : (
                    <div>
                        {budgets.map((budget, index) => (
                            <div key={index} className="budget-item">
                                <div className="budget-header">
                                    <span className="budget-label">{budget.category}</span>
                                    <span className="budget-amount">
                                        ${budget.spent} / ${budget.budget}
                                    </span>
                                </div>
                                <div className="budget-progress">
                                    <div
                                        className={`budget-progress-bar ${getProgressColor(budget.percentage)}`}
                                        style={{ width: `${budget.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="stats-grid" style={{ marginTop: '2rem' }}>
                <div className="stat-card">
                    <div className="stat-card-label">Total Budget</div>
                    <div className="stat-card-value">${totalBudget.toFixed(0)}</div>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
                        Monthly allocation
                    </p>
                </div>
                <div className="stat-card">
                    <div className="stat-card-label">Total Spent</div>
                    <div className="stat-card-value">${totalSpent.toFixed(0)}</div>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
                        {percentageUsed}% of budget used
                    </p>
                </div>
                <div className="stat-card">
                    <div className="stat-card-label">Remaining</div>
                    <div className="stat-card-value" style={{ color: '#10b981' }}>${remaining.toFixed(0)}</div>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
                        {100 - percentageUsed}% available
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BudgetTracker
