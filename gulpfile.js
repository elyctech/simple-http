const babel       = require("gulp-babel"),
      del         = require("del"),
      gulp        = require("gulp"),
      ts          = require("gulp-typescript");

const tsProject   = ts.createProject("tsconfig.json");

gulp.task("clean", function()
{
  return del("dist");
});

gulp.task("build", [
  "clean"
], function()
{
  return  tsProject.src()
          .pipe(tsProject()).js
          .pipe(babel({
            "presets": [
              "es2015"
            ]
          }))
          .pipe(gulp.dest("dist"));
});

gulp.task("default", [
  "clean",
  "build"
]);
