
var gulp = require('gulp')

//拷贝html文件
gulp.task('copy-html',function(){
	return gulp.src('html/*.html')
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
})

//整理图片
gulp.task('images',function(){
	return gulp.src('images/**/*.{jpg,png,gif}')
	.pipe(gulp.dest('dist/images/'))
	.pipe(connect.reload());
})


//拷贝js文件
gulp.task('scripts',function(){
	return gulp.src(['*.js','!gulpfile.js'])
	.pipe(gulp.dest('dist/js'))
	.pipe(connect.reload());
})


//拷贝css
var scss = require('gulp-scss');
gulp.task('scss',function(){
	return gulp.src('stylecss/*.scss')
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());
})

//拷贝data数据
gulp.task('data',function(){
	return gulp.src(['*.json','!package.json'])
	.pipe(gulp.dest('dist/data'))
	.pipe(connect.reload());
})

//拷贝php
gulp.task('php',function(){
	return gulp.src('php/*.php')
	.pipe(gulp.dest('dist/php'))
	.pipe(connect.reload());
})



//一次执行多个任务
gulp.task('build',['copy-html','images','scripts','scss','data','php'],function(){
	console.log('编译完成')
})

//gulp 监听
gulp.task('watch',function(){
	gulp.watch('html/*.html',['copy-html']);
	gulp.watch('images/*.{jpg,png,gif}',['images']);
	gulp.watch(['*.js','!gulpfile.js'],['scripts']);
	gulp.watch('stylecss/*.scss',['scss']);
	gulp.watch(['*.json','!package.json'],['data']);
	gulp.watch('php/*.php',['php']);
})


//启动服务器
var connect = require('gulp-connect');
gulp.task('server',function(){
	connect.server({
		root:'dist',
		port:8888,
		livereload:true
	})
})

//默认
gulp.task("default", ['watch', 'server']);







