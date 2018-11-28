module.exports = function(config){
  config.set({

    basePath : 'path/to/your-application',

    files : [
      'path/to/angular/angular.js',
      'path/to/angular-route/angular-route.js',
      'path/to/angular-resource/angular-resource.js',
      'path/to/angular-mocks/angular-mocks.js',
      'path/to/angular-animate/*.js',
      'path/to/your-angular-js-files',
      'path/to/your-spec-test-files'
    ],

    autoWatch : true,
    //singleRun: true,  // needed to CLI with jenkins.

    frameworks: ['jasmine'],

    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--no-sandbox',
          '--remote-debugging-port=9222',
        ]
      },
      FirefoxHeadless: {
        base: 'Firefox',
        flags: [ '-headless' ],
      }
    },
    browsers: ['ChromeHeadless',  'FirefoxHeadless'], // Edge is only available for Windows 10.
    
    // coverage reporter generates the coverage
    preprocessors: {
      // source files, that you wanna generate coverage for (do not include tests or libraries)
      'app/!(bower_components)/{**/*.js, *.js}': ['coverage']
    },
    reporters: ['progress', 'coverage', 'dots', 'junit'],
    coverageReporter: {
      type : 'html',
      dir : 'test/unit/coverage/' // output destination folder for coverage report.
    },

    
    phantomjsLauncher: {
        // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },
    
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

// https://github.com/karma-runner/karma-coverage