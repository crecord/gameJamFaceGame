// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-ruby-sass');

// Compass & Compile our Sass
gulp.task('sass', function() {
    var path = './public/stylesheets/';
    var files = [
        path + 'sass/*.scss'
    ]
    return gulp.src(files)
        .pipe(sass({
            compass: true,
            sourcemapPath: '../sass',
            style: 'compressed'
        }))
        .on('error', function(err) {
            console.log(err.message);
        })
        .pipe(gulp.dest('./public/stylesheets/css/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./public/stylesheets/sass/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);
