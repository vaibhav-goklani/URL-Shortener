const shortId = require('ssid');
const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({ error: 'url is erquired' });
    const entry = await URL.findOne({ longURL: body.url });
    let shortID;
    if(!entry){
        shortID = shortId(8);
        await URL.create({
            shortID: shortID,
            longURL: body.url,
            visitHistory: [],
            createdBy: req.user._id,
        });
    }
    else{
        shortID = entry.shortID;
    }

    return res.render('home', {
        shortenedURL: `http://localhost:8000/${shortID}`,
    });
}

async function handleRedirectToLongURL(req, res) {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate(
        {
            shortID
        },
        {
            $push: {
                visitHistory: { timestamp: Date.now(), ip: req.ip }
            }
        }
    );
    if(!entry) return res.status(404).json({ error: 'URL not found' });
    return res.redirect(entry.longURL);
}

async function handleGetAnalytics(req, res) {
    const shortID = req.params.shortID;
    const entry = await URL.findOne({ shortID });
    return res.json({ totalClicks: entry.visitHistory.length, analytics: entry.visitHistory });
}

async function handleGetAllURL(req, res) {
    const entries = await URL.find();
    return res.json(entries);
}

async function handleDelete(req, res) {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndDelete({ shortID });
    if(!entry) return res.status(404).json({ error: 'URL not found' });
    return res.status(200).json({ message: 'URL deleted successfully' });
}

module.exports = {
    handleGenerateNewShortURL,
    handleRedirectToLongURL,
    handleGetAnalytics,
    handleGetAllURL,
    handleDelete,
};