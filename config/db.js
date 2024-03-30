/**
 * db.js
 * @description :: exports database connection using mongoose
 */

const mongoose = require('mongoose');
const seederAdmin = require('../seeder/seederAdmin');

mongoose.set('strictQuery', true);
const uri = process.env.DB_URL;

const dbConnection = () =>{
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
      }).then(()=>{
        console.log('Connection Successful :', uri);
        // seederAdmin();
      }).catch((err)=>{
        console.log('Error in mongodb connection', uri);
      })
}




module.exports = dbConnection;