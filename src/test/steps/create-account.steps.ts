import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber'; 
import { pageFixture } from '../support/page-fixture';
import { CreateAccountAction } from '../../main/actions/create-account.action';
import { HomeAction } from '../../main/actions/home.action';
import { expect } from '@playwright/test';

let homeActions: HomeAction;
let createAccount: CreateAccountAction;
setDefaultTimeout(60 * 1000 * 2);

Given('I am on the registration page', async () => {
    homeActions = HomeAction.initialize(pageFixture.page);
    await homeActions.navigate('https://www.advantageonlineshopping.com');
    await homeActions.navigateToRegisterAccount();
});

When('I enter valid user information', async function () {
    createAccount = CreateAccountAction.initialize(pageFixture.page);
    await createAccount.enterUserInformation();
});

Then('I should see a confirmation message', async function () {
    const userCreated = await homeActions.getUserNameText();
    const expectedUserName = createAccount.getUserName();

    expect(userCreated).toContain(expectedUserName);
});
