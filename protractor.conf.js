// var globals = require('protractor');
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
  
    framework: 'jasmine',
    capabilities: {
      browserName: 'chrome',
      // shardTestFiles: true,
      // maxInstances: 5,
      chromeOptions: {
        args: [ "--headless", "--disable-gpu" ]
      }
    },
    specs: [
      './src/specs/*.spec.js'
    ],
    directConnect: true,
    // seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: false,
    getPageTimeout: 180000,
    allScriptsTimeout: 180000,

    onPrepare() { 
      // let browser = globals.browser;
      jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: 'Reports/screenshots',
        screenshotsSubfolder: 'images'
     }).getJasmine2Reporter());
      browser.driver.manage().window().maximize();
      browser.driver.manage().window().setPosition(0, 0);
      browser.manage().timeouts().implicitlyWait(5000);
    }, 
    onComplete() { 
      browser.close();
    }  
}

// "webdriver-update": "./node_modules/protractor/bin/webdriver-manager update --standalone --versions.standalone=3.8.0 --chrome --versions.chrome=74.0.3729.157"
// - run:
//           name: Install Docker Compose
//           command: |
//             curl -L https://github.com/docker/compose/releases/download/1.19.0/docker-compose-`uname -s`-`uname -m` > ~/docker-compose
//             chmod +x ~/docker-compose
//             sudo mv ~/docker-compose /usr/local/bin/docker-compose
//       - setup_remote_docker:
//           docker_layer_caching: true
