const express = require('express');
const URL = require('../models/url');

const { handleRedirectToLongURL } = require('../controllers/url');
const { restrictTo } = require('../middlewares/auth');

const router = express.Router();

router.get('/', restrictTo(["user", "admin"]), async (req, res) => {
    const entries = await URL.find({ createdBy: req.user._id });
    return res.render('home', {
        entries,
    });
});

router.get('/admin/urls', restrictTo(['admin']), async (req, res) => {
    const entries = await URL.find();
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