const express = require('express');
const { handleGenerateNewShortURL, handleGetAnalytics, handleDelete } = require('../controllers/url');

const router = express.Router();

router.post('/', handleGenerateNewShortURL);

router.get('/analytics/:shortID', handleGetAnalytics);

router.delete('/:shortID', handleDelete);

module.exports = router;