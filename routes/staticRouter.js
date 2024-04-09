const express = require('express');
const URL = require('../models/url');

const { handleRedirectToLongURL } = require('../controllers/url');

const router = express.Router();

router.get('/', async (req, res) => {
    const entries = await URL.find({});
    return res.render('home', {
        entries,
    });
});

router.get('/:shortID', handleRedirectToLongURL);

module.exports = router;