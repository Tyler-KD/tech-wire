const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  // Pass through User
  // bulkCreate creates and inserts multiple instances in bulk
  const users = await User.bulkCreate(userData, {
    // BulkCreate hooks will still be run if options.hooks is true
    individualHooks: true,
    // Return all columns for the affected rows
    returning: true,
  });

  // Pass through Blog
  const blogs = await Blog.bulkCreate(blogData.map(blog => ({
    ...blog,
    user_id: users[Math.floor(Math.random() * users.length)].id,
  })), {
    // BulkCreate hooks will still be run if options.hooks is true
    individualHooks: true,
    // Return all columns for the affected rows
    returning: true,
  });

  for (const comment of commentData) {
    await Comment.create({
        ...comment,
        user_id: users[Math.floor(Math.random() * users.length)].id,
        blog_id: blogs[Math.floor(Math.random() * blogs.length)].id,
    });
  };

  process.exit(0);
};

// Seeds the database to index.js
seedDatabase();