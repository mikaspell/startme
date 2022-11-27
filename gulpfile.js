const {parallel, series} = require('gulp');

const html = require("./gulp-tasks/markup.gulp-task");
const styles = require("./gulp-tasks/styles.gulp-task");
const scripts = require("./gulp-tasks/scripts.gulp-task");
const clean = require("./gulp-tasks/clean.gulp-task");
const serve = require("./gulp-tasks/server.gulp-task");
const copy = require("./gulp-tasks/copy.gulp-task");

exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.clean = clean;
exports.copy = copy;
exports.serve = serve;

exports.default = series(clean, parallel(html, styles, scripts), copy, serve);
exports.build = series(clean, html, styles, scripts, copy);