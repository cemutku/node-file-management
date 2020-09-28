const fs = require('fs');

const stream = fs.createReadStream('./data/stream.log', {
  encoding: 'utf8',
});

const writer = fs.createWriteStream('./data/output.log');

// prevent back pressure with one line!
stream.pipe(writer);

/** without stream.pipe(writer);

    let iteration = 0;

    stream.on('data', (data) => {
    console.log(++iteration);

    writeData(data);
    });

    // timeout for simulate write stream is slower than read
    const writeData = (data) => {
    setTimeout(() => {
        writer.write(data);
    }, 60000);
    };
 */

/** Back Pressure
 * A backup of data, caused by streams being unable to process data before the next batch arrives.
 */
