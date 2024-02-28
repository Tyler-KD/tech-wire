const router = require('express').Router();
// Imports User model
const { User } = require('../../models');

// The `api/users` endpoint

// route to create/add a user using async/await
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            // If the user is successfully created, the new response will be returned as json
            // 200 status code means the request is successful
            res.status(200).json(userData);
        });
    } catch (err) {
        // 400 Bad Request response status code indicates that the server cannot or will not process
        // the request due to something that is perceived to be a client error
        res.status(400).json(err);
    }
});

// route to log in with username and password
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// route to log out
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        // req.session.destroy removes the session from the session store
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;