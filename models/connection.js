const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/trade_your_trade';
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);