const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Route to render homepage
router.get("/", async (req, res) => {
    try {
        // Find all blogs with associated usernames
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username"]
                }
            ],
        });
        // Convert blog data to plain JavaScript object
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        // Render homepage template with blogs and login status
        res.render('homepage', {
            blogs,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        // If there is an error, return 500 status code and error message
        res.status(500).json(err);
    }
});

// Route to render individual blogs
// Get one blog with serialized data
router.get('/blog/:id', async (req, res) => {
    try {
        // Search the database for a blog with an id that matches params
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    include: [
                        { 
                            model: User, attributes: ['username'],
                        },
                    ],
                },
            ],
        });
        // Use .get({ plain: true }) on the object to serialize it so that it only includes the data needed
        const blog = blogData.get({ plain: true });
        // The 'blog' template is rendered and blog is passed into the template.
        res.render('blog', {
            ...blog,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to render dashboard and all blogs by user
// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Blog }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Route to render login page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});


module.exports = router;