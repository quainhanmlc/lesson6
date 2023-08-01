const mongoose = require('mongoose');
var bookSchema = mongoose.Schema({
    // khai báo trường dữ liệu
    title: String,
    author: String,
    date: Date,
    price: Number,
    quantity: Number,
    image: String
});
    // khai báo bảng ở đây gồm tên mô tả bảng "sach" + kieu du lieu + ten bang
var BookModel = mongoose.model("sach", bookSchema, "Book");

module.exports = BookModel;
