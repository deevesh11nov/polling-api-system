const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Polling_System');

// ----->this the code for using the cloud mongodb atlas ------------------------------------------------------- 

const connectParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

// ----->this the code for manually using the mongodb of local system

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("Successfully connected to MongoDB");
});

module.exports = mongoose;