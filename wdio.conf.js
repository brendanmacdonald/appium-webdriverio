exports.config = {
    specs: [
        __dirname + '/tests/**'
    ],
    exclude: [],
    maxInstances: 10,
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000, // Default timeout for all waitFor* commands.
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['appium'],
    capabilities: [{
        deviceName: 'Nexus_5X_API_24',
        platformVersion: '7.0',
        platformName: 'android',
        app: "./ContactManager.apk",
        automationName: 'UiAutomator2'
    }],
    appium: {
        waitStartTime: 6000,
        command: 'appium.cmd',
        logFileName: 'appium.log',
        args: {
            address: '127.0.0.1',
            port: 4723,
            commandTimeout: '7200',
            sessionOverride: true,
            debugLogSpacing: true,
            showIosLog: true
        }
    },
    host: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    framework: 'mocha',
    reporters: ['dot', 'spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 30000
    },
    before: function () {
        var chai = require('chai');
        global.expect = chai.expect;
        chai.should();
    },
    afterTest: function (test) {
        // if test passed, ignore, else take and save screenshot.
        if (test.passed) {
            return;
        }
        // get current test title and clean it, to use it as file name
        var filename = encodeURIComponent(test.title.replace(/\s+/g, '-'));
        // build file path
        var filePath = this.screenshotPath + filename + '.png';
        // save screenshot
        browser.saveScreenshot(filePath);
        console.log('\n\tScreenshot location:', filePath, '\n');

    }
}