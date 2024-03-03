// Utility for handling expired cookie
const handleExpiredCookie = (req, res, next) => {
    // If the cookie has expired, then the status code is a 400 Bad Request 
    console.log(req.session.logged_in);
    if (!req.session.logged_in) {
        res.status(400).json(err);
    } else {
      next();
    }
  };
  
  module.exports = handleExpiredCookie;