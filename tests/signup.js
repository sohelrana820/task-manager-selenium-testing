var color = require("colors");
var domainName = 'http://task-manager.sohelrana.me';
var signupUrl = 'http://task-manager.sohelrana.me/users/signup';
var logoutUrl = 'http://task-manager.sohelrana.me/users/logout';
var email = 'admin@example.com';
var password = '123456';

module.exports = {
    failedSignup: function (config) {
        var driver = config.driver;
        var By = config.By;
        var until = config.until;

        driver.get(signupUrl);
        driver.wait(until.titleContains('Create Account - ThemeVessel Task Manager'), 10000).then(function (p1) {
            driver.findElement(By.name('profile[first_name]')).sendKeys('');
            driver.findElement(By.name('profile[last_name]')).sendKeys('');
            driver.findElement(By.name('username')).sendKeys('');
            driver.findElement(By.name('password')).sendKeys('');
            driver.findElement(By.name('cPassword')).sendKeys('');
            driver.findElement(By.className('btn btn-primary login-button')).click();
            driver.wait(until.titleContains('Create Account - ThemeVessel Task Manager'), 10000).then(function (p1) {
                console.log("================= Failed Signup [STARTED] =============".grey);
                console.log("*Checking required fields".blue);
                console.log("\t ->First name must be required!".green);
                console.log("\t ->Last name must be required!".green);
                console.log("\t ->Email address must be required!".green);
                console.log("\t ->Password must be required!".green);
                console.log("\t ->Confirm password must be required!".green);
                console.log("\n");
            });
        });

        // Invalid email checking
        driver.get(signupUrl);
        driver.wait(until.titleContains('Create Account - ThemeVessel Task Manager'), 10000).then(function (p1) {
            driver.findElement(By.name('profile[first_name]')).sendKeys('Test');
            driver.findElement(By.name('profile[last_name]')).sendKeys('Demo');
            driver.findElement(By.name('username')).sendKeys('adminmfsldkfs;dlf');
            driver.findElement(By.name('password')).sendKeys('111111');
            driver.findElement(By.name('cPassword')).sendKeys('111111');
            driver.findElement(By.className('btn btn-primary login-button')).click();
            driver.wait(until.titleContains('Create Account - ThemeVessel Task Manager'), 10000).then(function (p1) {
                console.log("*Invalid email address".blue);
                console.log("\t ->Please provide valid email address!".green);
                console.log("\n");
            });
        });

        // Existing email testing
        driver.get(signupUrl);
        driver.wait(until.titleContains('Create Account - ThemeVessel Task Manager'), 10000).then(function (p1) {
            driver.findElement(By.name('profile[first_name]')).sendKeys('Test');
            driver.findElement(By.name('profile[last_name]')).sendKeys('Demo');
            driver.findElement(By.name('username')).sendKeys('admin@example.com');
            driver.findElement(By.name('password')).sendKeys('111111');
            driver.findElement(By.name('cPassword')).sendKeys('111111');
            driver.findElement(By.className('btn btn-primary login-button')).click();
            driver.wait(until.titleContains('Create Account - ThemeVessel Task Manager'), 10000).then(function (p1) {
                console.log("*Exist email address".blue);
                console.log("\t ->This email address is already registered!".green);
                console.log("\n");
            });
        });

        // Password and confirm password not match
        driver.get(signupUrl);
        driver.wait(until.titleContains('Create Account - ThemeVessel Task Manager'), 10000).then(function (p1) {
            driver.findElement(By.name('profile[first_name]')).sendKeys('Test');
            driver.findElement(By.name('profile[last_name]')).sendKeys('Demo');
            driver.findElement(By.name('username')).sendKeys('admin2@example.com');
            driver.findElement(By.name('password')).sendKeys('fsdf');
            driver.findElement(By.name('cPassword')).sendKeys('111111');
            driver.findElement(By.className('btn btn-primary login-button')).click();
            driver.wait(until.titleContains('Create Account - ThemeVessel Task Manager'), 10000).then(function (p1) {
                console.log("*Password not matched".blue);
                console.log("\t ->password and confirm password not matched!".green);
                console.log("================= Failed Signup [ENDED] ===============".grey);
                console.log("\n");
            });
        });
    },
    successSignup: function (config) {
        var driver = config.driver;
        var By = config.By;
        var until = config.until;

        driver.get(signupUrl);
        driver.wait(until.titleContains('Create Account - ThemeVessel Task Manager'), 10000).then(function (p1) {
            driver.findElement(By.name('profile[first_name]')).sendKeys('Test');
            driver.findElement(By.name('profile[last_name]')).sendKeys('Demo');
            driver.findElement(By.name('username')).sendKeys('admin9@example.com');
            driver.findElement(By.name('password')).sendKeys('111111');
            driver.findElement(By.name('cPassword')).sendKeys('111111');
            driver.findElement(By.className('btn btn-primary login-button')).click();
            driver.wait(until.titleContains('Signin - ThemeVessel Task Manager'), 10000).then(function (p1) {
                console.log("================= Success Signup [STARTED] =============".grey);
                console.log("*Signup complete".blue);
                console.log("\t ->Signup has been completed successfully!".green);
                console.log("================= Success Signup [ENDED] ===============".grey);
                console.log("\n");
            });
        });
    },
};