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
    // 200 status code means the request is successful
    res.status(200).json(blogData);
  } catch (err) {
    // 500 status code means the server encountered an unexpected condition
    // that prevented it from fulfilling the request
    res.status(500).json(err);
  }
  });

  module.exports = router;