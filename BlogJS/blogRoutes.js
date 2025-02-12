
const express = require('express');
const router = express.Router();
const Blog = require('./blogModel');

router.get('/blogs', function(req, res, next) {
  Blog.find({}, function(err, blogs) {
    if (err) {
      res.send(err);
    }
    res.json(blogs);
  });
});

router.post('/blogs', function(req, res, next) {
  const newBlog = new Blog(req.body);
  newBlog.save(function(err, blog) {
    if (err) {
      res.send(err);
    }
    res.json(blog);
  });
});

module.exports = router;
