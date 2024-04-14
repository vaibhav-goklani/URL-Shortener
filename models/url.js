const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
    {
        shortID: {
            type: String,
            required: true,
            unique: true,
        },
        longURL: {
            type: String,
            required: true,
        },
        visitHistory: [{ timestamp: { type: Number } }],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        }
    },
    { timestamps: true }
);

const URL = mongoose.model('url', urlSchema);

module.exports = URL;