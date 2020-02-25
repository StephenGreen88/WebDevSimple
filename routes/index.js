// Require in necessary dependencies
const express = require('express');
const router = express.Router();

// Routes
// =================================
router.get('/', (req, res) => {
    res.send('Hello World!')
});

// Module Exports
module.exports = router

