// Import models
const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// Users have many Blogs
// The HasMany association is used to create a One-To-Many relationship between two models
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Blogs belong to Users
// BelongsTo Association is capable of creating both One-To-One and One-To-Many relationships
Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

// Blogs have many Comments
Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

// Comments belong to Blogs
Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
});

// Users have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Comments belong to Users
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Blog, Comment };