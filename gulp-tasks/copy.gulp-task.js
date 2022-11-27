const {src, dest} = require('gulp');

const {copyFiles} = require('../config');

function copy() {
    const fileMap = new Map(copyFiles);

    return new Promise(resolve => {
        fileMap.forEach((v, k) => {
            src(k).pipe(dest(v));
        });

        resolve();
    });
}

module.exports = copy;