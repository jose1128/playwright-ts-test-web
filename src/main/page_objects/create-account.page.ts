import { expect, Locator, Page } from '@playwright/test';
import { generateRandomPassword } from '../utils/password-utils';
import { faker } from '@faker-js/faker/locale/es_MX';


export class CreateAccountPage {
    private readonly userPassword: string;
    private readonly userNameField: Locator;
    private readonly emailField: Locator;
    private readonly passwordField: Locator;
    private readonly confirmPasswordField: Locator;
    private readonly firstNameField: Locator;
    private readonly lastNameField: Locator;
    private readonly phoneNumberField: Locator;
    private readonly countrySelect: Locator;
    private readonly cityField: Locator;
    private readonly addressField: Locator;
    private readonly stateField: Locator;
    private readonly zipCodeField: Locator;
    private readonly termsCheckbox: Locator;
    private readonly registerButton: Locator;
    private page: Page;
    

    constructor(page: Page) {
        this.page = page;
        this.userNameField = this.page.locator('input[name="usernameRegisterPage"]');
        this.emailField = this.page.locator('input[name="emailRegisterPage"]');
        this.passwordField = this.page.locator('input[name="passwordRegisterPage"]');
        this.confirmPasswordField = this.page.locator('input[name="confirm_passwordRegisterPage"]');
        this.firstNameField = this.page.locator('input[name="first_nameRegisterPage"]');
        this.lastNameField = this.page.locator('input[name="last_nameRegisterPage"]');
        this.phoneNumberField = this.page.locator('input[name="phone_numberRegisterPage"]');
        this.countrySelect = this.page.locator('select[name="countryListboxRegisterPage"]');
        this.cityField = this.page.locator('input[name="cityRegisterPage"]');
        this.addressField = this.page.locator('input[name="addressRegisterPage"]');
        this.stateField = this.page.locator('input[name="state_/_province_/_regionRegisterPage"]');
        this.zipCodeField = this.page.locator('input[name="postal_codeRegisterPage"]');
        this.termsCheckbox = this.page.locator('input[name="i_agree"]');
        this.registerButton = this.page.locator('button[id="register_btn"]');
        
        this.userPassword = generateRandomPassword();
        console.log(`Generated password: ${this.userPassword}`);
    }

    async enterUserInformation(): Promise<void> {
        await expect(this.userNameField).toBeEnabled();
        await this.userNameField.fill(faker.animal.petName().concat(faker.number.int({ min: 100, max: 999 }).toString()));
        await this.emailField.fill(faker.internet.email());
        await this.passwordField.fill(this.userPassword);
        await this.confirmPasswordField.fill(this.userPassword);

        await this.firstNameField.fill(faker.person.firstName());
        await this.lastNameField.fill(faker.person.lastName());
        await this.phoneNumberField.fill(faker.phone.number());

        await this.countrySelect.selectOption({ label: 'Colombia' });
        await this.cityField.fill(faker.location.city());
        await this.addressField.fill(faker.location.streetAddress());
        await this.stateField.fill(faker.animal.petName());
        await this.zipCodeField.fill(faker.location.zipCode());

        await this.termsCheckbox.check();
        await this.registerButton.click();
    }
}