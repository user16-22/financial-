const express = require('express');
const router = express.Router();
const Report = require('../models/Report');

// Get all reports
router.get('/', async (req, res) => {
    try {
        const reports = await Report.find().sort({ createdAt: -1 });
        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Generate/Create a new report
router.post('/', async (req, res) => {
    const report = new Report({
        reportType: req.body.reportType,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        format: req.body.format || 'pdf',
        data: req.body.data || {}
    });

    try {
        const newReport = await report.save();
        res.status(201).json(newReport);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get a specific report by ID
router.get('/:id', async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);
        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }
        res.json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
