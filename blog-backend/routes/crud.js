const express = require('express')
const Blogs = require('../db-models/Blogs.js')
const router = express.Router()

router.post('/blog', (req, res) => {
    console.log("Creating new blog...")
})

router.get('/getBlogs', (req, res) => {
    Blogs.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });

module.exports = router
