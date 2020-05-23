import gulp from "gulp";
import babel from "gulp-babel";
import sourcemaps from "gulp-sourcemaps";
import sass from "gulp-sass";
import uglify from "gulp-uglify";
import del from "del";
import rename from "gulp-rename";
import livereload from "gulp-livereload";
import autoprefixer from "gulp-autoprefixer";
import imagemin from "gulp-imagemin";
import htmlmin from "gulp-htmlmin";
//define paths
const paths = {
  style: {
    src: "src/style/style.scss",
    dest: "dist/style/",
  },
  script: {
    src: "src/script/index.js",
    dest: "dist/script/",
  },
  html: {
    src: "src/*.html",
    dest: "dist",
  },
  imgs: {
    src: "src/imgs/*.{jpg,jpeg,png,svg}",
    dest: "dist/imgs",
  },
};

const clean = () => del(["dist"]);

const script = () => {
  return gulp
    .src(paths.script.src)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(
      rename({
        basename: "script",
        suffix: ".min",
        extname: ".js",
      })
    )
    .pipe(gulp.dest(paths.script.dest))
    .pipe(livereload());
};

const style = () => {
  return gulp
    .src(paths.style.src)
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(
      rename({
        basename: "style",
        suffix: ".min",
        extname: ".css",
      })
    )
    .pipe(gulp.dest(paths.style.dest))
    .pipe(livereload());
};

const html = () => {
  return gulp
    .src(paths.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(livereload());
};

const imgs = () => {
  return gulp
    .src(paths.imgs.src)
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(paths.imgs.dest))
    .pipe(livereload());
};

const watch = () => {
  require("./server");
  //to reload automatically, you have to add a script tag in your html file with src of  'http://localhost:35729/livereload.js'
  livereload.listen();
  gulp.watch(paths.script.src, script);
  gulp.watch("src/style/**/*.scss", style);
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.imgs.src, imgs);
};

const build = gulp.series(clean, gulp.parallel(html, style, imgs, script));

export { script };
export { style };
export { html };
export { imgs };
export { clean };
export { watch };

export default build;
