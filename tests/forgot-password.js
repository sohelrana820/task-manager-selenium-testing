var color = require("colors");
var domainName = 'http://task-manager.sohelrana.me';
var forgotPassUrl = 'http://task-manager.sohelrana.me/users/forgot-password';;
var email = 'admin@example.com';
var password = '123456';

module.exports = {
    wrongAttempt: function (config) {
        var driver = config.driver;
        var By = config.By;
        var until = config.until;

        driver.get(forgotPassUrl);
        driver.wait(until.titleContains('Forgot Password - ThemeVessel Task Manager'), 10000).then(function (p1) {
            driver.findElement(By.className('btn btn-primary login-button')).click();
            driver.wait(until.titleContains('Forgot Password - ThemeVessel Task Manager'), 10000).then(function (p1) {
                console.log("================= Forgot Password Wrong Attempt [STARTED] =============".grey);
                console.log("*Checking required fields".blue);
                console.log("\t ->Provide valid email address".green);
                console.log("\n");
            });
        });

        driver.get(forgotPassUrl);
        driver.wait(until.titleContains('Forgot Password - ThemeVessel Task Manager'), 10000).then(function (p1) {
            driver.findElement(By.name('username')).sendKeys('unregistered@example.com');
            driver.findElement(By.className('btn btn-primary login-button')).click();
            driver.wait(until.titleContains('Forgot Password - ThemeVessel Task Manager'), 10000).then(function (p1) {
                console.log("*Email not registered".blue);
                console.log("\t ->This email is not registered yet!".green);
                console.log("================= Forgot Password Wrong Attempt [ENDED] ===============".grey);
                console.log("\n");
            });
        });
    },

    successAttempt: function (config) {
        var driver = config.driver;
        var By = config.By;
        var until = config.until;

        driver.get(forgotPassUrl);
        driver.wait(until.titleContains('Forgot Password - ThemeVessel Task Manager'), 10000).then(function (p1) {
            driver.findElement(By.name('username')).sendKeys(email);
            driver.findElement(By.className('btn btn-primary login-button')).click();
            driver.wait(until.titleContains('Forgot Password - ThemeVessel Task Manager'), 10000).then(function (p1) {
                driver.wait(driver.findElement(By.className('text-center alert alert-success')), 10000).then(function (p1) {
                    console.log("================= Forgot Password Success Attempt [STARTED] =============".grey);
                    console.log("*Emailed reset link".blue);
                    console.log("\t -> Reset password link has been send to given email address".green);
                    console.log("================= Forgot Password Success Attempt [ENDED] ===============".grey);
                    console.log("\n");
                });
            });
        });
    },
};