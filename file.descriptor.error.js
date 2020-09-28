const fs = require('fs');

console.log('Opening files...');

for (let i = 0; i < 50000; i++) {
  const fd = fs.openSync('./data/app.log');
  console.log(fd);
  //   fs.close(fd, () => {});
  fs.closeSync(fd);
}

// Any time you have a file descriptor, you are responsible for closing the file.
// If you use path the readfile will close for us! but if you use fd, you have close the file.
