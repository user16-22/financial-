import { useState } from 'react'

const SetBudgetForm = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        category: 'Food & Dining',
        amount: '',
        period: 'monthly'
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
        onClose()
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="Food & Dining">Food & Dining</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Health & Fitness">Health & Fitness</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Housing">Housing</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="amount">Budget Amount ($)</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="period">Period</label>
                <select
                    id="period"
                    name="period"
                    value={formData.period}
                    onChange={handleChange}
                    required
                >
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
            </div>

            <div className="form-actions">
                <button type="button" onClick={onClose} className="btn-secondary">
                    Cancel
                </button>
                <button type="submit" className="btn-primary">
                    Set Budget
                </button>
            </div>
        </form>
    )
}

export default SetBudgetForm
