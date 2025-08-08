import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber'; 
import { pageFixture } from '../support/page-fixture';
import { HomePage } from '../../main/page_objects/home.page';
import { CreateAccountPage } from '../../main/page_objects/create-account.page';

let homePage: HomePage;
let createAccount: CreateAccountPage;
setDefaultTimeout(60 * 1000 * 2);

Given('I am on the registration page', async () => {
 homePage = new HomePage(pageFixture.page);

 await homePage.navigate('https://www.advantageonlineshopping.com');
 await homePage.navigateToRegisterAccount();
});

When('I enter valid user information', async function () {
    createAccount = new CreateAccountPage(pageFixture.page);
    await createAccount.enterUserInformation();
});

Then('I should see a confirmation message', async function () {
    return 'pending';
});
