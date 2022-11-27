const {src, dest} = require('gulp');

const {buildDir, sources} = require('../config');

function scripts() {
    return src(sources.scripts).pipe(dest(buildDir));
}

module.exports = scripts;