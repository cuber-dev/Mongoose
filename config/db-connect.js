require('dotenv').config();


const mongoose = require('mongoose');

const collection = require('./controllers/controller');
const db = { collection }

const doOperation = async (data) => {
  try {
    const { action , query } = data;

    switch (action) {
        case 'write-one':
            await db.collection.insertOne(query);
            break;
        case 'write-many':
            await db.collection.insertMany(query);
            break;
        case 'update-one':
            await db.collection.updateOne(query);
            break;
        case 'update-many':
            await db.collection.updateMany(query);
            break;
        case 'read':
            await db.collection.readCollections(query);
            break;
        case 'delete-one':
            await db.collection.deleteOne(query);
            break;
        case 'delete-many':
            await db.collection.deleteMany(query);
            break;
        default:
            console.error('Invalid action:', action);
            return;
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.disconnect();
  }
};

const connectDB = async (data) => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true
    });
    console.log('Connected to the database');
    await doOperation(data);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

module.exports = {
  connectDB,
};
