const { src, dest } = require('gulp');
const pug = require('gulp-pug');

const {buildDir, sources} = require('../config');

function html() {
    return src(sources.markup)
        .pipe(pug({pretty: true}))
        .pipe(dest(buildDir));
}

module.exports = html;