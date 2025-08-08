import { expect, Locator, Page } from '@playwright/test';

export class CreateAccountPage {
    
    readonly userNameField: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly confirmPasswordField: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly phoneNumberField: Locator;
    readonly countrySelect: Locator;
    readonly cityField: Locator;
    readonly addressField: Locator;
    readonly stateField: Locator;
    readonly zipCodeField: Locator;
    readonly termsCheckbox: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.userNameField = page.locator('input[name="usernameRegisterPage"]');
        this.emailField = page.locator('input[name="emailRegisterPage"]');
        this.passwordField = page.locator('input[name="passwordRegisterPage"]');
        this.confirmPasswordField = page.locator('input[name="confirm_passwordRegisterPage"]');
        this.firstNameField = page.locator('input[name="first_nameRegisterPage"]');
        this.lastNameField = page.locator('input[name="last_nameRegisterPage"]');
        this.phoneNumberField = page.locator('input[name="phone_numberRegisterPage"]');
        this.countrySelect = page.locator('select[name="countryListboxRegisterPage"]');
        this.cityField = page.locator('input[name="cityRegisterPage"]');
        this.addressField = page.locator('input[name="addressRegisterPage"]');
        this.stateField = page.locator('input[name="state_/_province_/_regionRegisterPage"]');
        this.zipCodeField = page.locator('input[name="postal_codeRegisterPage"]');
        this.termsCheckbox = page.locator('input[name="i_agree"]');
        this.registerButton = page.locator('button[id="register_btn"]');
    }
}