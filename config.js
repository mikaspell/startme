exports.buildDir = './build';
exports.sources = {
    markup: './resources/views/*.pug',
    styles: './resources/**/*.scss',
    scripts: './resources/**/*.js',
    images: './resources/images/*.{png,jpg,jpeg,gif,svg}'
};
exports.watchOn = {
    markup: ['./resources/views/**/*.pug', 'html'],
    styles: [this.sources.styles, 'styles'],
    scripts: [this.sources.scripts, 'scripts'],
    images: [this.sources.images, 'copy']
};
exports.copyFiles = [
    [this.sources.images, this.buildDir + '/images'],
    ['./resources/fonts/**/*.{ttf,woff,woff2,eot,svg}', this.buildDir + '/fonts'],
    ['./node_modules/bootstrap/dist/js/bootstrap.min.js', this.buildDir + '/scripts/vendors'],
];