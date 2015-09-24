var gulp = require("gulp");
var bg = require('gulp-bg');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config");
var eslint = require('gulp-eslint'); //Lint JS files

var config = {
	paths: {
		js: './src/**/*.js',
	}
}

gulp.task('build-webpack', function(callback){
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        hot: true,
        quiet: false,
        publicPath: webpackConfig.output.publicPath,
        stats: {
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        }

    }).listen(3000, "localhost", function(err) {
      if(err) throw new gutil.PluginError("webpack-dev-server", err);
      gutil.log("[webpack-dev-server]", "http://localhost:3000/webpack-dev-server/index.html");
    });
});

gulp.task('eslint', function() {
	return gulp.src(config.paths.js)
		.pipe(eslint({config: 'eslint.config.json'}))
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});

gulp.task('build', ['build-webpack']);

gulp.task('default', ['build']);
