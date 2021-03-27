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
  name: String,
  fname: String,
  occup: String,
  designation: String,
  org: String,
  org_type: String,
  off_add: String,
  district: String,
  pincode: String,
  state: String,
  phone: String,
  fax: String,
  email: String,
  pc_add: String,
  dob: String,
  blood_group: String,
  eduqual: String,
  hobbies: String,
  spouse_name: String,
  spouse_occup: String,
  spouse_dob: String,
  spouse_add: String,
  spouse_district: String,
  spouse_pincode: String,
  spouse_state: String,
  spouse_phone: String,
  spouse_tax: String,
  spouse_pan: String,
  aadhar: String,
  like_ylf_host: String,
  club_org_mem: String,
  reg_date: String
});

const MarimonyUserCollection = mongoose.model('marimonyusers', MarimonyUsers);

module.exports = MarimonyUserCollection;