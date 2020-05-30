/* Variables definition */
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const purgeCSS = require('gulp-purgecss')
const autoPrefixer = require('gulp-autoprefixer');
const terser = require('gulp-terser');
const imageMin = require('gulp-imagemin');
const concat = require('gulp-concat');

gulp.task('html', function() {
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
	return gulp.src('src/**/*.css')
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(autoPrefixer('last 2 versions'))
		.pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
	return gulp.src('src/**/*.js')
		.pipe(terser())
		.pipe(gulp.dest('dist'));
});

gulp.task('img', function() {
	return gulp.src('src/images/**/*')
		.pipe(imageMin())
		.pipe(gulp.dest('dist/images'));
});

gulp.task('vendor-css', function() {
	return gulp.src(['node_modules/@fortawesome/fontawesome-free/css/all.min.css',
		'node_modules/bootstrap/dist/css/bootstrap.min.css',
		'node_modules/mdbootstrap/css/mdb.min.css',
		'node_modules/aos/dist/aos.css'
	])
		.pipe(concat('vendor.bundle.css'))
		.pipe(purgeCSS({
			content: ['src/**/*.html']
		}))
		.pipe(gulp.dest('src/vendor/css'))
		.pipe(gulp.dest('dist/vendor/css'));
});

gulp.task('vendor-js', function() {
	return gulp.src([
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
		'node_modules/mdbootstrap/js/mdb.min.js',
		'node_modules/aos/dist/aos.js',
		'node_modules/particles.js/particles.js',
		'node_modules/tilt.js/dest/tilt.jquery.min.js',
		'node_modules/stats.js/build/stats.min.js'
	])
		.pipe(concat('vendor.bundle.js'))
		.pipe(gulp.dest('src/vendor/js'))
		.pipe(gulp.dest('dist/vendor/js'));
});

gulp.task('fontawesome', function() {
	return gulp.src([
		'node_modules/@fortawesome/fontawesome-free/webfonts/**/*',
		'node_modules/@fortawesome/fontawesome-free/svgs/**/*',
	],
		{
			base: 'node_modules/@fortawesome/fontawesome-free'
		})
		.pipe(gulp.dest('src/vendor'))
		.pipe(gulp.dest('dist/vendor'));
});

gulp.task('docs', function() {
	return gulp.src([
		'src/**/*.docx',
		'src/**/*.pdf'
	])
		.pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('html', 'img', 'css', 'js', 'vendor-css', 'vendor-js', 'fontawesome', 'docs'));