const { convertCsv } = require('../csv.parse');
const fs = require('fs');
module.exports.read = () => {
  try {
    const data = fs.readFileSync(
      './data/pulitzer-circulation-data.csv',
      'utf8'
    );
    console.table(convertCsv(data));
  } catch (error) {
    console.log(`Error with file : ${error}`);
  }

  // It is blocking code
};
