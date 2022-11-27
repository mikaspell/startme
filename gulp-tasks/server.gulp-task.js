const {watch} = require('gulp');
const browserSync = require('browser-sync').create();

const {buildDir, watchOn} = require('../config');
const gulpTaskRegistry = require("../gulpfile");

function serve() {
    browserSync.init({
        server: buildDir
    })

    Object.values(watchOn).forEach(cmd => {
        watch(cmd[0], gulpTaskRegistry[cmd[1]]).on('change', browserSync.reload);
    });
}

module.exports = serve;