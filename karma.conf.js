var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
    config.set({
        browsers: ['ChromeHeadless'], //avilable browsers: ChromeHeadless, Chrome
        singleRun: true,

        customLaunchers: {
            //support remote agent option (attach)
            ChromeDebugging: {
                base: 'Chrome',
                flags: ['--remote-debugging-port=9333']
            }
        },
        // singleRun: true, //just run once by default
        frameworks: ['jasmine'],
        files: [
            'tests.webpack.js',
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap'],
            'src/**/*(!spec).jsx': ['coverage']
        },
        reporters: ['progress', 'coverage'],

        coverageReporter: {
            reporters: [{
                    type: 'html',
                    subdir: 'report-html'
                },
                {
                    type: 'lcov',
                    subdir: 'report-lcov'
                },
                {
                    type: 'text'
                },
            ],
            dir: 'coverage-client-unit/'
        },
        webpack: {
            mode: 'development',
            target: "web",
            devtool: 'inline-source-map',

            module: {
                rules: [
                    {
                        test: /\.js$|\.jsx$/,
                        use: {
                          loader: 'istanbul-instrumenter-loader',
                          options: { esModules: true }
                        },
                        enforce: 'post',
                        include: /src\.js$|\.jsx$/,
                        exclude: /\.spec\.js$|\.spec\.jsx$/,
                      },
                ]
            },
            resolve: {
                extensions: ['*', '.js', '.jsx']
            },
        },

        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });
};