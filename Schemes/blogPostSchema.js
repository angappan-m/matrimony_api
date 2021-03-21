const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then((value) => {
    const db = value;
    console.log('db connected');
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  title: String,
  body: String,
});

const blogCollection = mongoose.model('blogpost', BlogPost);

module.exports = blogCollection;