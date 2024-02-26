const router = require('express').Router();
const { Comment } = require('../../models');

// route to create/add a comment using async/await
router.post('/', async (req, res) => {
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