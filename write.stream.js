const fs = require('fs');

const stream = fs.createReadStream('./data/app.log', {
  highWaterMark: 95, // for simulating a long running stream
  encoding: 'utf8',
});

const writer = fs.createWriteStream('./data/output.log');

let iteration = 0;

stream.on('data', (data) => {
  stream.pause();

  setTimeout(() => {
    console.log(++iteration);

    writer.write(data);

    stream.resume();
  }, 1000);
});
