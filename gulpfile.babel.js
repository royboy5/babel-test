import gulp from 'gulp';
import babel from 'gulp-babel';

// Load all gulp plugins automatically
// and attach them to the `plugins` object
import plugins from 'gulp-load-plugins';

// ---------------------------------------------------------------------
// | Helper vars                                                        |
// ---------------------------------------------------------------------

var jsSources = ['src/js/*.js'];


// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------


gulp.task('default', () => {
    plugins().util.log('Calling Default Task...');
    return gulp.src(jsSources)
        .pipe(babel())
        .pipe(gulp.dest('dist/js'));
});