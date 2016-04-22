var gulp = require('gulp'),
    connect = require('gulp-connect-multi')();

gulp.task('connect', connect.server({
    root: ['app'],
    port: 3030,
    livereload: true,
    open: {
        file: 'views/index.html',
        browser: 'chrome' // if not working OS X browser: 'Google Chrome'
    }
}));

gulp.task('html', function () {
    gulp.src('./app/views/index.html')
        .pipe(connect.reload());
});

gulp.task('default', ['connect']);