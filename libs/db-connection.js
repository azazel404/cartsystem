const mongoose = require('mongoose');
const { MONGO_URL } =  require('../config/keys');


mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL,{useNewUrlParser: true});

mongoose.connection
    .on('open', () => console.info('Database COnnected'))
    .on('error', err => console.info('database failed connection'));
