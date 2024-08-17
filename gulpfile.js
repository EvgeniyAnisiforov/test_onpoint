const gulp = require("gulp");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");


gulp.task("PageOneCss", function () {
  const processors = [
    autoprefixer({ browsers: ["last 2 versions"] }),
  ];

  return gulp
    .src("./src/components/postcss/PageOneBefore.module.css")
    .pipe(postcss(processors))
    .pipe(rename("PageOne.module.css"))
    .pipe(gulp.dest("./src/components/pages/Page_1"));
});

gulp.task("PageTwoCss", function () {
  const processors = [
    autoprefixer({ browsers: ["last 2 versions"] }),
  ];

  return gulp
    .src("./src/components/postcss/PageTwoBefore.module.css")
    .pipe(postcss(processors))
    .pipe(rename("PageTwo.module.css"))
    .pipe(gulp.dest("./src/components/pages/Page_2"));
});

gulp.task("PageThreeCss", function () {
  const processors = [
    autoprefixer({ browsers: ["last 2 versions"] }),
  ];

  return gulp
    .src("./src/components/postcss/PageThreeBefore.module.css")
    .pipe(postcss(processors))
    .pipe(rename("PageThree.module.css"))
    .pipe(gulp.dest("./src/components/pages/Page_3"));
});


gulp.task("ModalWindowCss", function () {
  const processors = [
    autoprefixer({ browsers: ["last 2 versions"] }),
  ];

  return gulp
    .src("./src/components/postcss/ModalWindowBefore.module.css")
    .pipe(postcss(processors))
    .pipe(rename("ModalWindow.module.css"))
    .pipe(gulp.dest("./src/components/pages/Page_3"));
});

 