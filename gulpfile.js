var gulp=require('gulp'),
	uglify = require('gulp-uglify'),
	minifyCSS = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
	minifyhtml = require('gulp-minify-html');

var paths = {
	scripts: ['src/js/*.js','src/views/js/*.js'],
    styles: ['src/css/*.css','src/views/css/*.css'],
    images: ['src/img/*','src/views/images/*'],
    content: ['src/index.html','src/project-2048.html','src/project-mobile.html','src/project-webperf.html','src/views/pizza.html']
}
gulp.task('uglify', function(){
	gulp.src(paths.scripts[0])
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));
	console.log(paths.scripts[1]);
	gulp.src(paths.scripts[1])
		.pipe(uglify())
		.pipe(gulp.dest('dist/views/js/'));
});

gulp.task('minifyCSS', function(){
	gulp.src(paths.styles[0])
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css/'));
	gulp.src(paths.styles[1])
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/views/css/'));
});

gulp.task('imagemin', function(){
	gulp.src(paths.images[0])
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img/'));
	gulp.src(paths.images[1])
		.pipe(imagemin())
		.pipe(gulp.dest('dist/views/images/'));
});

gulp.task('minifyhtml', function(){
	gulp.src(paths.content[0])
		.pipe(minifyhtml())
		.pipe(gulp.dest('dist/'));
	gulp.src(paths.content[1])
		.pipe(minifyhtml())
		.pipe(gulp.dest('dist/'));	
	gulp.src(paths.content[2])
		.pipe(minifyhtml())
		.pipe(gulp.dest('dist/'));
	gulp.src(paths.content[3])
		.pipe(minifyhtml())
		.pipe(gulp.dest('dist/'));
	gulp.src(paths.content[4])
		.pipe(minifyhtml())
		.pipe(gulp.dest('dist/views'));
});

gulp.task('default', function(){
	// place code here
});

gulp.task("all",['uglify','minifyCSS','imagemin','minifyhtml']);
