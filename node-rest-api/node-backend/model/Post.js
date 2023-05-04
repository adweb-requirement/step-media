const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let Post = new Schema({
  author: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  content: {
    type: String
  }
}, {
  collection: 'post'
})
 
module.exports = mongoose.model('Post', Post)