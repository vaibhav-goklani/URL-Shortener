const { getUser } = require('../service/auth');

function checkAuthencation(req, res, next) {
    const userToken = req.cookies?.token;

    const user = getUser(userToken);

    req.user = user;
    next();
}

function restrictTo(roles = []) {
    return (req, res, next) => {
        if(!req.user) return res.redirect('/login');

        if(!roles.includes(req.user.role)) return res.json({ status: "Unauthorized" });
        
        next();
    }
}

module.exports = {
    checkAuthencation,
    restrictTo,
};