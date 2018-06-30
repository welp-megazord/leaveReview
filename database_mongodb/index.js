const mongo = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/yelp';

let _db;
let lastIndex = 0;
const connection = mongo.connect(url, (err, client) => {
  if(err) console.log('Err connection to MongoDB: ', err);
  else {
    console.log('Successfully connected to MONGODB');
    _db = client.db();
    db().collection('users').find({}).sort({_id: -1}).limit(1).toArray()
      .then(data => {
        // console.log(data[0]._id);
        lastIndex = data[0]._id;
      })
      .catch(err => {
        console.log('err in USERS POST: ', err);
      })
  }
});

const db = () => _db;
const returnLast = () => lastIndex;
const increment = () => ++lastIndex;

module.exports = {
  db,
  returnLast,
  increment
}