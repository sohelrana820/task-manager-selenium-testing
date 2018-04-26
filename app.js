var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    chrome = require('selenium-webdriver/chrome');

var chromeCapabilities = webdriver.Capabilities.chrome();

//setting chrome options to start the browser fully maximized
var chromeOptions = {
    'args': ['--start-maximized', '--verbose']
};
chromeCapabilities.set('chromeOptions', chromeOptions);

var prefs = new webdriver.logging.Preferences();
prefs.setLevel(webdriver.logging.Type.BROWSER, webdriver.logging.Level.DEBUG);
chromeCapabilities.setLoggingPrefs(prefs);
//webdriver.WebDriver.logging.installConsoleHandler()

var chromeDriver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();

chromeDriver.manage().logs().get(webdriver.logging.Type.BROWSER)
    .then(function(entries) {
        entries.forEach(function(entry) {
            console.log('[%s] %s', entry.level.name, entry.message);
        });
    });

var configParams = {driver: chromeDriver, By: By, until: until};

var login = require("./tests/login");
var signup = require("./tests/signup");
var forgotPassword = require("./tests/forgot-password");
login.testRedirectToLogin(configParams);
signup.failedSignup(configParams);
signup.successSignup(configParams);
forgotPassword.wrongAttempt(configParams);
forgotPassword.successAttempt(configParams);
login.testRedirectToLogin(configParams);
login.testLoginPageLinks(configParams);
login.testLoginFailed(configParams);
login.testLoginSuccessful(configParams);
login.logoutNow(configParams);
chromeDriver.quit();
