import { useState } from 'react'

const ViewReportsForm = ({ onClose, onGenerate }) => {
    const [formData, setFormData] = useState({
        reportType: 'summary',
        startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0],
        format: 'pdf'
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onGenerate(formData)
        // Don't close immediately - show success message
        alert(`${formData.reportType.charAt(0).toUpperCase() + formData.reportType.slice(1)} report generated successfully!`)
        onClose()
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="reportType">Report Type</label>
                <select
                    id="reportType"
                    name="reportType"
                    value={formData.reportType}
                    onChange={handleChange}
                    required
                >
                    <option value="summary">Financial Summary</option>
                    <option value="transactions">Transaction History</option>
                    <option value="budget">Budget Analysis</option>
                    <option value="expenses">Expense Breakdown</option>
                    <option value="income">Income Report</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="format">Export Format</label>
                <select
                    id="format"
                    name="format"
                    value={formData.format}
                    onChange={handleChange}
                    required
                >
                    <option value="pdf">PDF</option>
                    <option value="csv">CSV</option>
                    <option value="excel">Excel</option>
                </select>
            </div>

            <div className="form-actions">
                <button type="button" onClick={onClose} className="btn-secondary">
                    Cancel
                </button>
                <button type="submit" className="btn-primary">
                    Generate Report
                </button>
            </div>
        </form>
    )
}

export default ViewReportsForm
