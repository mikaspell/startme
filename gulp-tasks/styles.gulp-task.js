const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const {buildDir, sources} = require('../config');

function styles() {
    return src(sources.styles)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(dest(buildDir));
}

module.exports = styles;