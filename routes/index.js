// Require in necessary dependencies
const express = require('express');
const router = express.Router();

// Routes
// =================================
router.get('/', (req, res) => {
    res.render('index')
});

// Module Exports
module.exports = router

