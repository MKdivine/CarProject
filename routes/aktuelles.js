const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Route zum Anzeigen aller Blog-Posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: 'desc' });
    res.render('aktuelles', { posts });
  } catch (err) {
    console.error(err);
    res.status(500).send('Serverfehler');
  }
});

// Route zum Erstellen eines neuen Blog-Posts
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = new Post({ title, content });
    await newPost.save();
    res.redirect('/aktuelles');
  } catch (err) {
    console.error(err);
    res.status(500).send('Serverfehler');
  }
});

module.exports = router;