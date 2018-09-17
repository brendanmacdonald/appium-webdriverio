exports.config = {
    specs: [
        __dirname + '/tests/**'
    ],
    logLevel: 'error',
    screenshotPath: './errorShots/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['appium'],
    capabilities: [{
        deviceName: 'Pixel_2_API_23',
        platformVersion: '6.0',
        platformName: 'Android',
        app: "./ContactManager.apk",
        automationName: 'UiAutomator2',
        autoGrantPermissions: true,
        fullReset: true
    }],
    appium: {
        waitStartTime: 6000,
        command: 'appium.cmd',
        logFileName: 'appium.log',
        args: {
            address: '127.0.0.1',
            commandTimeout: '7200',
            sessionOverride: true,
            debugLogSpacing: true,
            showIosLog: false
        }
    },
    port: 4723,
    framework: 'mocha',
    reporters: ['spec'],
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