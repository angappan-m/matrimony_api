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

const MarimonyUsers = new Schema({
    name : String,
    pass: String,
    dob: String,
    fname: String,
    occup: String,
    designation: String,
    org: String,
    off_add: String,
    state: String,
    district: String,
    pincode: String,
    phone: String,
    email: String,
    pc_add: String,
    eduqual: String,
    bobbies: String,
    aadhar_no: String
});

const MarimonyUserCollection = mongoose.model('marimonyusers', MarimonyUsers);

module.exports = MarimonyUserCollection;