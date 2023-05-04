const express = require('express');
const app = express();
 
const postRoute = express.Router();
let Post = require('../model/Post');
 
// Add Post
postRoute.route('/add-post').post((req, res, next) => {
  Post.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
 
// Get all Post
postRoute.route('/').get((req, res) => {
  Post.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
// Get Post
postRoute.route('/read-post/:id').get((req, res) => {
  Post.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
 
// Update Post
postRoute.route('/update-post/:id').put((req, res, next) => {
    Post.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Post updated successfully!')
    }
  })
})
 
// Delete Post
postRoute.route('/delete-post/:id').delete((req, res, next) => {
    Post.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
 
module.exports = postRoute;