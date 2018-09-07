### Install the dependencies
```
npm install
```

### Execute tests
```
npm run test
```

### Notes
1. The tests currently only run for Android devices, and the tests are executed on an .apk file included in this repo.
2. To execute the tests, the 'capabilities' in the wdio.conf.js file must contain the details of the device to be tested on. You can include multiple capabilities.
E.g.
```
capabilities: [{
    deviceName: 'Nexus_5X_API_24',
    platformVersion: '7.0',
    platformName: 'android',
    app: "./ContactManager.apk",
    automationName: 'UiAutomator2'
}],
```
3. The device must be running. A list of available devices can be obtained via:
```
adb devices
```
6. The appium server is automatically started by the tests by 'wdio-appium-service'.
7. You may also need to install appium globally via
```
npm i -g appium
```

Tested against:
 - Android virtual devices
 - Genymotion virtual devices