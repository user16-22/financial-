const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// GET /api/blogposts
router.get('/', async (req, res) => {
    try {
        const posts = await BlogPost.find().sort({ publishedDate: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /api/blogposts/:id
router.get('/:id', async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /api/blogposts (Optional: for seeding or admin)
router.post('/', async (req, res) => {
    const post = new BlogPost({
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        author: req.body.author
    });
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
