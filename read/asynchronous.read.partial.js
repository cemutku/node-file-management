const { convertCsv } = require('../csv.parse');
const fs = require('fs');

module.exports.read = () => {
  // fd -> file descriptor

  fs.open('./data/pulitzer-circulation-data.csv', (err, fd) => {
    // read 200 bytes at a time
    const buffer = Buffer.alloc(200);

    // What file to read from
    // Where to store data
    // offset not for the file, but for the buffer - Buffer Location
    // buffer.length -> how many bytes we want to read from the file - How much to read
    // start beginning of the file -> 0 - File starting point

    fs.read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
      // count ->  number of bytes that were read
      // buff  -> data that was read
      console.table(convertCsv(buff.toString()));
    });
  });
};
