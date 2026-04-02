import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Pie, Line } from 'react-chartjs-2'

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const Analytics = () => {
    const expenseData = {
        labels: ['Food & Dining', 'Transportation', 'Entertainment', 'Shopping', 'Health', 'Utilities'],
        datasets: [
            {
                label: 'Expenses by Category',
                data: [450, 180, 120, 340, 150, 280],
                backgroundColor: [
                    '#3b82f6',
                    '#ef4444',
                    '#f59e0b',
                    '#10b981',
                    '#8b5cf6',
                    '#ec4899',
                ],
                borderWidth: 0,
            },
        ],
    }

    const trendData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Income',
                data: [4500, 5200, 4800, 5500, 6000, 5800],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                tension: 0.4,
                fill: true,
            },
            {
                label: 'Expenses',
                data: [3200, 3800, 3500, 4100, 4500, 4200],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                tension: 0.4,
                fill: true,
            },
        ],
    }

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 15,
                    font: {
                        size: 12
                    }
                }
            },
        },
    }

    const lineOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    padding: 15,
                    font: {
                        size: 12
                    }
                }
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return '$' + value
                    }
                }
            }
        }
    }

    return (
        <div>
            <div className="page-header">
                <h2>Analytics</h2>
                <p>Visualize your financial data and trends</p>
            </div>
            
            <div className="charts-grid">
                <div className="chart-container">
                    <h3>Expense Breakdown</h3>
                    <Pie data={expenseData} options={pieOptions} />
                </div>

                <div className="chart-container">
                    <h3>Income vs Expenses Trend</h3>
                    <Line data={trendData} options={lineOptions} />
                </div>
            </div>

            <div className="stats-grid" style={{ marginTop: '2rem' }}>
                <div className="stat-card">
                    <div className="stat-card-label">Average Monthly Income</div>
                    <div className="stat-card-value">$5,300</div>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
                        Last 6 months
                    </p>
                </div>
                <div className="stat-card">
                    <div className="stat-card-label">Average Monthly Expenses</div>
                    <div className="stat-card-value">$3,883</div>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
                        Last 6 months
                    </p>
                </div>
                <div className="stat-card">
                    <div className="stat-card-label">Savings Rate</div>
                    <div className="stat-card-value" style={{ color: '#10b981' }}>26.7%</div>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
                        Of total income
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Analytics
