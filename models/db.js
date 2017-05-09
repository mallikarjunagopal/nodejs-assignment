var chalk = require('chalk');
var mongoose = require( 'mongoose' );

//var dbURI = 'mongodb://localhost/nodejsdb';
var dbURI = 'mongodb://mallikarjuna:malli1208@ds133251.mlab.com:33251/nodejsfirst';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log(chalk.green('Connected'));
});

mongoose.connection.on('error',function (err) {
  console.log(chalk.red('Error: ' + err));
});

mongoose.connection.on('disconnected', function () {
  console.log(chalk.red('Mongoose disconnected'));
});

var employeeSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  dob: {type: Date},
  gender:{type:String},
  department:{type:String},
  age:{type:Number}
});

mongoose.model( 'Employee', employeeSchema );


