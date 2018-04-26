var color = require("colors");
var domainName = 'http://task-manager.sohelrana.me';
var logoutUrl = 'http://task-manager.sohelrana.me/users/logout';
var email = 'admin@example.com';
var password = '123456';

module.exports = {
    testRedirectToLogin: function (config) {
        var driver = config.driver;
        var By = config.By;
        var until = config.until;

        driver.get(domainName);
        driver.wait(until.titleContains('Signin - ThemeVessel Task Manager'), 10000).then(function (p1) {
            console.log("================= Unauthorized User Redirection [STARTED] =============".grey);
            console.log("*Checking redirection".blue);
            console.log("\t -> Successfully redirect unauthorized users to login page".green);
            console.log("================= Unauthorized User Redirection [ENDED] ===============".grey);
            console.log("\n");
        });
    },
    testLoginPageLinks: function (config) {
        var driver = config.driver;
        var By = config.By;
        var until = config.until;

        driver.get(domainName);
        driver.findElement(By.linkText('click here to create account')).click();
        driver.wait(until.titleContains('Create Account - ThemeVessel Task Manager'), 10000).then(function (p1) {
            console.log("================= Login Page Links [STARTED] =============".grey);
            console.log("*Checking links".blue);
            console.log("\t -> Signup/Create Account Link Good!".green);
        });

        driver.get(domainName);
        driver.findElement(By.linkText('Forgot password')).click();
        driver.wait(until.titleContains('Forgot Password - ThemeVessel Task Manager'), 10000).then(function (p1) {
            console.log("\t -> Forgot Password Link Good!".green);
            console.log("================= Login Page Links [ENDED] ===============".grey);
            console.log("\n");
        });
    },
    testLoginFailed: function (config) {
        var driver = config.driver;
        var By = config.By;
        var until = config.until;

        driver.get(logoutUrl);
        driver.findElement(By.name('username')).sendKeys(email);
        driver.findElement(By.name('password')).sendKeys('');
        driver.findElement(By.className('btn btn-primary login-button')).click();
        driver.wait(driver.findElement(By.className('text-center alert alert-danger')), 10000).then(function (p1) {
            console.log("================= Failed Login [STARTED] =============".grey);
            console.log("*Checking failed Login".blue);
            console.log("\t -> Failed login & displaying error flash message".green);
            console.log("================= Failed Login [STARTED] =============".grey);
            console.log("\n");
        });
    },
    testLoginSuccessful: function (config) {
        var driver = config.driver;
        var By = config.By;
        var until = config.until;

        //Checking successful login
        driver.get(domainName);
        driver.findElement(By.name('username')).sendKeys(email);
        driver.findElement(By.name('password')).sendKeys(password);
        driver.findElement(By.className('btn btn-primary login-button')).click();
        driver.wait(until.titleContains('My Dashboard - ThemeVessel Task Manager'), 10000).then(function (p1) {
            console.log("================= Successful Login [STARTED] =============".grey);
            console.log("*Checking successful Login".blue);
            console.log("\t -> Successful login & redirect to dashboard".green);
            console.log("================= Successful Login [ENDED] ===============".grey);
            console.log("\n");
        });
    },
    logoutNow: function (config) {
        var driver = config.driver;
        var By = config.By;
        var until = config.until;

        driver.get(logoutUrl);
        driver.wait(until.titleContains('Signin - ThemeVessel Task Manager'), 10000).then(function (p1) {
            console.log("================= Successful Logout [STARTED] =============".grey);
            console.log("*Checking logout".blue);
            console.log("\t -> Successfully loggedout and redirect to login page".green);
            console.log("================= Successful Logout [ENDED] ===============".grey);
            console.log("\n");
        });
    }
};