const express = require('express');
const router = express.Router();
const Budget = require('../models/Budget');

// Get all budgets
router.get('/', async (req, res) => {
    try {
        const budgets = await Budget.find().sort({ createdAt: -1 });
        res.json(budgets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new budget
router.post('/', async (req, res) => {
    const budget = new Budget({
        category: req.body.category,
        amount: req.body.amount,
        spent: req.body.spent || 0,
        period: req.body.period || 'monthly'
    });

    try {
        const newBudget = await budget.save();
        res.status(201).json(newBudget);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a budget
router.put('/:id', async (req, res) => {
    try {
        const budget = await Budget.findById(req.params.id);
        if (!budget) {
            return res.status(404).json({ message: 'Budget not found' });
        }

        if (req.body.category) budget.category = req.body.category;
        if (req.body.amount) budget.amount = req.body.amount;
        if (req.body.spent !== undefined) budget.spent = req.body.spent;
        if (req.body.period) budget.period = req.body.period;

        const updatedBudget = await budget.save();
        res.json(updatedBudget);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a budget
router.delete('/:id', async (req, res) => {
    try {
        const budget = await Budget.findById(req.params.id);
        if (!budget) {
            return res.status(404).json({ message: 'Budget not found' });
        }

        await budget.deleteOne();
        res.json({ message: 'Budget deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
