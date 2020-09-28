const fs = require('fs');

fs.writeFile(
  './data/newapp.log',
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /dot-write-file-test" 405 21512',
  { encoding: 'base64' },
  (err) => {
    err ? console.log(err) : console.log('file saved');
  }
);

/** File Flags
 *  r -> Read mode
 *  w -> Write mode
 *  a -> Append mode
 */

/** Extended Flags
 * x -> Exclusive
 * + -> Multiple modes  (r+, w+ -> will open the file for both reading and writing,
 *                       r+ will throw an exception when the file does not exist,
 *                       w+ will create the file)
 * s -> Synchronous     (rs+ will open a file for reading and writing synchronously) this flag will not convert to open to openSynch its not a js function
 */

/** Read Options
 * Allowed combinations -> r, r+, rs+
 */

/** Write Options
 * Allowed combinations -> w, wx (write exclusive, throw error when the file exists), w+, wx+
 */

/** Append Options
 * Allowed combinations -> a, ax, a+, ax+, as, as+
 */

/** Permission Constants - if not specified both read and write will be set automatically
 * S_IWUSR (0o200) -> Write by Owner
 * S_IRUSR (0o400) -> Read by Owner
 * { mode: fs.constants.S_IWUSR | fs.constants.S_IRUSR },
 */
