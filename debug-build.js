const fs = require('fs');
const path = require('path');

console.log('Current working directory:', process.cwd());
console.log('Contents of root directory:');
console.log(fs.readdirSync('.'));

if (fs.existsSync('./admin')) {
  console.log('Admin folder exists!');
  console.log('Contents of admin folder:');
  console.log(fs.readdirSync('./admin'));
} else {
  console.log('Admin folder does NOT exist in root');
}

if (fs.existsSync('./src/admin')) {
  console.log('Admin folder exists in src!');
  console.log('Contents of src/admin folder:');
  console.log(fs.readdirSync('./src/admin'));
} else {
  console.log('Admin folder does NOT exist in src');
}