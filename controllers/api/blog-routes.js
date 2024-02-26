const router = require('express').Router();
const { Blog, Comment } = require('../../models');

// The `/api/blogs` endpoint

// find all blogs
// This route uses async/await with try/catch for errors
// along with HTTP status codes
router.get('/', async (req, res) => {
    // Get all blogs from the category table
    try{
    const blogData = await Blog.findAll({
      include: [{ model: Comment }],
    });
    console.log(blogData);
    // 200 status code means the request is successful
    res.status(200).json(blogData);
  } catch (err) {
    // 500 status code means the server encountered an unexpected condition
    // that prevented it from fulfilling the request
    res.status(500).json(err);
  }
  });

  // route to create/add a blog post using async/await
router.post('/', async (req, res) => {
    try {
        const blogData = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });
            // If the blog is successfully created, the new response will be returned as json
            // 200 status code means the request is successful
            console.log(blogData);
            res.status(200).json(blogData);
        
    } catch (err) {
        // 400 Bad Request response status code indicates that the server cannot or will not process
        // the request due to something that is perceived to be a client error
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;