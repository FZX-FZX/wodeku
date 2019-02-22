const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');//压缩html
const cleanCSS = require('gulp-clean-css');//压缩css
const connect = require('gulp-connect');//开启服务器
const babel = require('gulp-babel');//e6转es5
var uglify = require('gulp-uglify');//压缩js
const rev = require('gulp-rev');//文件名称变成hash值
var revCollector = require('gulp-rev-collector');//在html引用的文件名称变成hash值
var concat = require('gulp-concat');//合并文件
var imagemin = require('gulp-imagemin');//压缩图片
var notify = require('gulp-notify');
var cache = require('gulp-cache');//高速缓存
var del = require('del');
//开启服务器
gulp.task('connect', function () {
  connect.server({
    root: 'dist',
    port: 8888,
    livereload: true//热更新
  });
});
//执行默认任务
gulp.task('default', ['connect','watch','all']);
//合并css文件
gulp.task('csss', function () {
  gulp.src('app/css/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist/css'));
});
//合并js文件
gulp.task('scripts', function () {
  gulp.src('app/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'));
});
//压缩css
gulp.task('minicss', function () {
  gulp.src('app/css/**/*.css')
    .pipe(cleanCSS())
    //.pipe(rev())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload())
    //生成一个json文件，记录hash值
    // .pipe(rev.manifest())
    // .pipe(gulp.dest('rev'))
  console.log('压缩css')
});
//压缩js
gulp.task('minijs', function () {
  gulp.src('app/js/**/*.js')
    //es6转es5
    .pipe(babel({
      presets: ['@babel/env']
    }))
    //再压缩
    .pipe(uglify())
    // .pipe(rev())
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload())
    // .pipe(connect.reload())
    //生成一个json文件，记录hash值
    // .pipe(rev.manifest())
    // .pipe(gulp.dest('rev'))
  console.log('压缩js')
});
//压缩html
gulp.task('minihtml', function () {
  //html引用文件名称变成hash值
  gulp.src(['app/*.html'])
    // .pipe(revCollector({
    //   dirReplacements: {
    //     'css': 'css',
    //     'js': 'js'
    //   }
    // }))
    //在html中的script代码和css代码都能压缩
    .pipe(htmlmin({ collapseWhitespace: true, minifyJS: true, minifyCSS: true }))
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload())
     console.log('压缩html')
});
//压缩图片
gulp.task('images', function () {
  gulp.src('app/images/**/*.*')
  .pipe(cache(imagemin({
   optimizationLevel: 3,
   progressive: true,
   interlaced: true
 })))
 .pipe(gulp.dest('dist/images'))
 .pipe(notify({
   message: 'Images task complete'
 }))
});
//所有任务
gulp.task('all', ['minicss','minijs','minihtml'], function () {
  // 将你的默认的任务代码放在这
  console.log('所有任务完成')
});
//任务执行前，先清除之前生成的文件
gulp.task('clean', function(cb) {
  del(['dist/css','dist/js'], cb)
});
//执行监听任务
gulp.task('watch', function () {
  gulp.watch('app/*.html', ['minihtml']);
  gulp.watch('app/css/**/*.css', ['minicss']);
  gulp.watch('app/js/**/*.js', ['minijs']);
})