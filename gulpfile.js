var gulp = require("gulp");
var spsave = require("gulp-spsave");

var coreOptions = {
    siteUrl: '[Your Sharepoint Site]'
};
var creds = {
    username: '[Your Username]',
    password: '[Your Password]'
    
};


gulp.task("save", function () {
    return gulp.src(["./App/**/*.*"], { base: "App" })
        .pipe(spsave({
            siteUrl: coreOptions.siteUrl,
            folder: "Style%20Library",
            flatten: false
        }, creds));
});

gulp.task("default", ["save"], function () { });