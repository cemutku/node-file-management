const { convertCsv } = require('../csv.parse');
const fs = require('fs');

module.exports.read = () => {
  fs.readFile('./data/pulitzer-circulation-data.csv', 'utf8', (err, data) => {
    if (err) {
      console.log(`There was a problem with the file ${err}`);
      return;
    }
    const values = convertCsv(data);
    console.table(values);
  });
};
