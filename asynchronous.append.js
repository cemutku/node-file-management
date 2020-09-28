const fs = require('fs');
const os = require('os');

// fs.writeFile(
//   './data/app.log',
//   '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /dot-write-file-test" 405 21512' +
//     os.EOL,
//   { flag: 'a' },
//   (err) => {
//     err ? console.log(err) : console.log('file saved');
//   }
// );

fs.appendFile(
  './data/app.log',
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /dot-write-file-test" 405 21512',
  (err) => {
    err ? console.log(err) : console.log('file saved');
  }
);
