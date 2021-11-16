const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://prince1204:prince1204@cluster0.eealq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error while connectiong to database:'));
db.once('open', function() {
  // we're connected!
  console.log("succcessful connection to database");

});