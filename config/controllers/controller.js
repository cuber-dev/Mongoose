
const model = require('../models/user');

const insertOne = async (query) => {
    try {
      const newUser = new model(query);
      const result = await newUser.save();
      console.log('Added successfully:', result);
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };
  
  const insertMany = async (query) => {
    try {
      const result = await model.create(query);
      console.log('Added successfully:', result);
    } catch (error) {
      console.error('Error adding documents:', error);
    }
  };
  
  const updateOne = async (query) => {
    try {
      const result = await model.updateOne(query.filter,query.update);
      console.log('Updated successfully:', result);
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };
  
  const updateMany = async (query) => {
    try {
      const result = await model.updateMany(query.filter,query.update);
      console.log('Updated All successfully:', result);
    } catch (error) {
      console.error('Error updating documents:', error);
    }
  };
  
  const readCollections = async (query) => {
    try {
      const collections = await model.find(query || {});
      console.log('Collection read successfully :', collections);
    } catch (error) {
      console.error('Error reading collections:', error);
    }
  };
  
  const deleteOne = async (query) => {
    try {
      const result = await model.deleteOne(query);
      console.log('Deleted successfully:', result);
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };
  
  const deleteMany = async (query) => {
    try {
      const result = await model.deleteMany(query);
      console.log('Deleted successfully:', result);
    } catch (error) {
      console.error('Error deleting documents:', error);
    }
  };
  


module.exports = {
    insertOne,
    insertMany,
    readCollections,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany
}

