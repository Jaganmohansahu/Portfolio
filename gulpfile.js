/* Variables definition */
const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const autoPrefixer = require('gulp-autoprefixer');
const terser = require('gulp-terser');

gulp.task('html', function() {
	return gulp.src('src/**/*.html')
	.pipe(gulp.dest('dist'));
});

gulp.task('img', function() {
	return gulp.src('src/images/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images'));
});

gulp.task('css', function() {
	return gulp.src('src/**/*.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoPrefixer('last 2 versions'))
	.pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
	return gulp.src('src/**/*.js')
	.pipe(terser())
	.pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('html', 'img', 'css', 'js'));