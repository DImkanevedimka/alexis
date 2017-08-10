var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var concat = require("gulp-concat");
var uglify = require("gulp-uglifyjs");
var cssnano = require("gulp-cssnano");
var rename = require("gulp-rename");
var del = require("del");
var imagemin = require("gulp-imagemin"); 
var pngquant    = require("imagemin-pngquant");
var cache = require ("gulp-cache");
var autoprefixer = require("gulp-autoprefixer")

gulp.task("default", ["watch"])

gulp.task("sass", function(){
	gulp.src("app/scss/*.scss")
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: true }))
	.pipe(gulp.dest("dist/css"))
	.pipe(browserSync.reload({stream: true}))
})

gulp.task("scriptslibs", function(){
	gulp.src([
			"app/libs/jquery/dist/jquery.min.js",
			"app/libs/slick/dist/slick.min.js",
			"app/libs/bootstrap/dist/js/bootstrap.min.js"
		])
	.pipe(concat("libs.min.js"))
	.pipe(uglify())
	.pipe(gulp.dest("dist/js"))
	.pipe(browserSync.reload({stream: true}))
})

gulp.task("css-libs", ["sass"] , function(){
	gulp.src("app/css/libs.css")
	.pipe(cssnano())
	.pipe(rename({suffix:".min"}))
	.pipe(gulp.dest("app/css"))
})

gulp.task("browser-sync", function(){
	browserSync({
		server: {
			baseDir:"dist"
		},
		notify: false
	})
})

gulp.task("html", function(){
	gulp.src("app/*.html")
	.pipe(gulp.dest("dist"))
	.pipe(browserSync.reload({stream: true}))
})

gulp.task("scripts", function(){
	gulp.src("app/js/*.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(browserSync.reload({stream: true}))
})


/*gulp.task("clean", function() {
    del.sync("dist")
})

gulp.task("clear", function() {
    cache.clearAll()
})*/


gulp.task("watch", ["browser-sync", "css-libs", "scriptslibs", "html", "scripts"],  function(){
	gulp.watch("app/scss/*.scss", ["sass"])
	gulp.watch("app/*.html", ['html'])
	gulp.watch("app/js/*.js", ['scripts'])
})


gulp.task("build",["clean", "sass", "scripts", "img"], function(){
	var buildCss = gulp.src([
		"app/css/full.css",
		"app/css/libs.min.css"
		])
	.pipe(gulp.dest("dist/css"))

	var buildFonts = gulp.src("app/fonts/**/*")
	.pipe(gulp.dest("dist/fonts"))

	var buildJs = gulp.src("app/js/**/*")
	.pipe(gulp.dest("dist/js"))

	var buildHtml = gulp.src("app/*.html")
	.pipe(gulp.dest("dist"))
})