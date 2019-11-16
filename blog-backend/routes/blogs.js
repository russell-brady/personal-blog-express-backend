const express = require('express')
var Blog = require('../db-models/BlogSchema.js')
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId

// Create one blog
router.post('/', (req, res) => {
  console.log("Creating new blog...")
  console.log(req.body)

  var newBlog = new Blog({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author
  });

  newBlog.save(function(err) {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: newBlog });
  });
});

// Get all blogs
router.get('/', (req, res) => {
  console.log("Getting all blogs...")

  Blog.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// Get one blog
router.get('/:id', (req, res) => {
  console.log("getting blog...")

  const id = new ObjectId(req.params.id);
  Blog.findById(id, (err, data) => {
    if (err) return res.send(err);
    return res.json({ success: true, data: data });
  });
});

// Update one blog
router.patch('/:id', (req, res) => {
  console.log("Updating blog...")  

  const id = new ObjectId(req.params.id);
  const update = req.body;

  console.log(update)

  Blog.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// Delete one blog
router.delete('/:id', (req, res) => {
  console.log("Deleting blog...")

  const id = new ObjectId(req.params.id);
  Blog.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

module.exports = router
