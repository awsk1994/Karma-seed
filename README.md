# Description #

Seed/configuration files to get started with Karma.

## Unit Testing in AngularJS ##

[Tutorial Powerpoint](Unit%20Testing%20in%20AngularJS.pptx)

## Get Started ##

1. Run 'npm install'

2. In karma.conf.js, change 'files' and 'basePath' to your angularJS source code.

 - you must include all the basic angular library files, such as angular.js, angular-route.js, angular-resource.js, angular-mocks.js

3. Run 'karma start'

## Useful Links ##

Karma: http://karma-runner.github.io/3.0/intro/installation.html

Jasmine: https://jasmine.github.io/tutorials/your_first_suite

About Unit Testing: http://notafraidofwong.blogspot.com/search/label/Unit%20Testing

## Browser ##

Currently, it is set to use headless Chrome and Firefox. To switch it to non-headless, change browser configuration to:
`
browsers: ['Chrome',  'Firefox'], // Non-headless browsers.
`

`
browsers: ['ChromeHeadless',  'FirefoxHeadless'], // Headless browsers.
`

## Included Plugins ##

### Karma-Coverage ###

After your run 'karma test', karma-coverage will export a webpage to the destination defined in karma.conf.js' coverageReporter.dir

Open folder, and right click (open-as Chrome) to view the website.

### JUnit Reporter ###

Useful for Jenkins CI integration. More info in http://karma-runner.github.io/3.0/plus/jenkins.html

