const fs = require('fs');

// highWaterMark -> number of bytes to take at one time. It's the max number of bytes that stream will read at one point.
// default size of buffer is 64 kB

const stream = fs.createReadStream('./data/app.log', {
  highWaterMark: 9550,
  encoding: 'utf8',
});

stream.on('data', (data) => {
  stream.pause();
  console.log(data);

  setTimeout(() => {
    stream.resume();
  }, 2000);
});

// console.log uses a stream
// console.log = function (d) {
//   process.stdout.write(d + '\n');
// };

// What happens when the output stream is slower than the input stream?
