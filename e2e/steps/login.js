const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');

const { login, verifyErrorMessage } = require('../pages/login');
const { verifyLoggedUser } = require('../pages/sidebar');

setDefaultTimeout(60 * 1000);

Given('I am at the login page', async function () {
  await this.page.goto(process.env.BASE_URL);
});

When('I set a valid username and a valid password', async function () {
  await login(this.page, process.env.VALID_USERNAME, process.env.VALID_PASSWORD);
});

Then('I should be redirected to the dashboard page', async function () {
  await verifyLoggedUser(this.page, `@${process.env.VALID_USERNAME}`, this.isMobile);
});
