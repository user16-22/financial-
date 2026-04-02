const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const Budget = require('../models/Budget');

// Get dashboard statistics
router.get('/stats', async (req, res) => {
    try {
        // Get all transactions
        const transactions = await Transaction.find();

        // Calculate total income
        const totalIncome = transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);

        // Calculate total expenses
        const totalExpenses = transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);

        // Calculate total balance
        const totalBalance = totalIncome - totalExpenses;

        // Calculate total savings (for now, same as balance)
        const totalSavings = totalBalance * 0.35; // Assume 35% savings rate

        // Get previous month data for comparison (simplified)
        const lastMonth = new Date();
        lastMonth.setMonth(lastMonth.getMonth() - 1);

        const lastMonthTransactions = transactions.filter(t =>
            new Date(t.date) < lastMonth
        );

        const lastMonthIncome = lastMonthTransactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);

        const lastMonthExpenses = lastMonthTransactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);

        // Calculate percentage changes
        const incomeChange = lastMonthIncome > 0
            ? `+${((totalIncome - lastMonthIncome) / lastMonthIncome * 100).toFixed(1)}%`
            : '+0%';

        const expensesChange = lastMonthExpenses > 0
            ? `+${((totalExpenses - lastMonthExpenses) / lastMonthExpenses * 100).toFixed(1)}%`
            : '+0%';

        const balanceChange = '+12.5%'; // Simplified
        const savingsChange = '+15.7%'; // Simplified

        res.json({
            totalBalance,
            totalIncome,
            totalExpenses,
            totalSavings,
            balanceChange,
            incomeChange,
            expensesChange,
            savingsChange
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get dashboard overview
router.get('/overview', async (req, res) => {
    try {
        const transactions = await Transaction.find().limit(10).sort({ date: -1 });
        const budgets = await Budget.find();

        res.json({
            recentTransactions: transactions,
            budgets: budgets
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
