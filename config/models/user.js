const mongoose = require('mongoose');

// example model
const modelName = 'User'
const schema = {
  name: String,
  email: String,
  age: Number,
  // ,{
  //   strict : false // add this for allowing any prop to be added to the schema
  // },
}

const collection = 'tempUsers'

const model = mongoose.model(
  modelName,
  new mongoose.Schema(schema),
  collection
);



module.exports = model;