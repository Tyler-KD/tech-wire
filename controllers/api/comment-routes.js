const router = require('express').Router();
// Imports Comment model
const { Comment } = require('../../models');
// Imports handleExpiredCookie module
const handleExpiredCookie = require('../../utils/handleExpiredCookie')

// The `api/comments` endpoint

// Route to create/add a comment using async/await.
// If user's cookie has not expired, then route is accessed.
// If user's cookie has expired, then throw 400 Bad Request error, and navigate back to the login route.
router.post('/', handleExpiredCookie, async (req, res) => {
    try {
        const commentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
            // If the comment is successfully created, the new response will be returned as json
            // 200 status code means the request is successful
            console.log('comment');
            console.log(commentData);
            res.status(200).json(commentData);
        
    } catch (err) {
        // 400 Bad Request response status code indicates that the server cannot or will not process
        // the request due to something that is perceived to be a client error
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;