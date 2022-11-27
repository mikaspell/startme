const cleaner = require('rimraf');
const {buildDir} = require('../config');

function clean(cb) {
    return cleaner(buildDir, {}, cb);
}

module.exports = clean;