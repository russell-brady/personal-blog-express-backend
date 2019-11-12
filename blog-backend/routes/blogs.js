const express = require('express')
var Blog = require('../db-models/Blog.js')
const router = express.Router()

// Create one blog
router.post('/', (req, res) => {
  console.log("Creating new blog...")
  console.log(req.body)

  var newBlog = new Blog({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author
  })

  newBlog.save(function(err) {
    if (err) return res.json({ success: false, error: err });
    
    return res.json({ success: true });
  })
})

// Get all blogs
router.get('/', (req, res) => {
  Blog.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// Get one blog
router.get('/:id', (req, res) => {
  console.log("getting blog...")
  return res.json({ success: true});
})

// Update one blog
router.patch('/:id', (req, res) => {
  console.log("Updating blog...")  
  return res.json({ success: true});
})

// Delete one blog
router.delete('/:id', (req, res) => {
  console.log("Deleting blog...")
  return res.json({ success: true});
})

module.exports = router
