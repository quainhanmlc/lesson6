var express = require('express');
const BookModel = require('../Models/bookModel');
var router = express.Router();

router.get('/', async (req, res)=>{
  //lay du lieu tu bang book vao luu vao array
  var books = await BookModel.find();
  // res.send(books);
  //render file book_list in view
  res.render('book_list', { books : books});
})

module.exports = router;