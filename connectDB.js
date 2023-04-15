const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/test?retryWrites=true&w=majority';
const mongoMiddleware = async (req, res, next) => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected!');
    req.db = mongoose.connection.db;
    next();
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    next(err);
  }
};

module.exports = mongoMiddleware;