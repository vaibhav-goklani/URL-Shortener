const express = require('express');
const URL = require('../models/url');

const { handleRedirectToLongURL } = require('../controllers/url');

const router = express.Router();

router.get('/', async (req, res) => {
    if(!req.user) return res.redirect('/login');
    const entries = await URL.find({ createdBy: req.user._id });
    return res.render('home', {
        entries,
    });
});

router.get('/signup', (req, res) => {
    return res.render('signup');
});

router.get('/login', (req, res) => {
    return res.render('login');
});

router.get('/:shortID', handleRedirectToLongURL);

module.exports = router;