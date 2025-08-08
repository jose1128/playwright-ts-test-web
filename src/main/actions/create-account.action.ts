import { expect, Locator, Page } from '@playwright/test';
import { generateRandomPassword } from '../utils/password-utils';
import { CreateAccountPage } from '../page_objects/create-account.page';
import { faker } from '@faker-js/faker/locale/es_MX';

export class CreateAccountAction {
    private readonly userName: string;
    private readonly userPassword: string;
    private readonly createAccountPage: CreateAccountPage;

    private constructor(page: Page) {
        this.createAccountPage = new CreateAccountPage(page);
        this.userPassword = generateRandomPassword();
        this.userName = faker.animal.petName().concat(faker.number.int({ min: 100, max: 999 }).toString());
        console.log(`Generated password: ${this.userPassword}`);
    }

    static initialize(Page: Page): CreateAccountAction {
        return new CreateAccountAction(Page);
    }

    async enterUserInformation(): Promise<void> {
        await expect(this.createAccountPage.userNameField).toBeEnabled();
        await this.createAccountPage.userNameField.fill(this.userName);
        await this.createAccountPage.emailField.fill(faker.internet.email());
        await this.createAccountPage.passwordField.fill(this.userPassword);
        await this.createAccountPage.confirmPasswordField.fill(this.userPassword);

        await this.createAccountPage.firstNameField.fill(faker.person.firstName());
        await this.createAccountPage.lastNameField.fill(faker.person.lastName());
        await this.createAccountPage.phoneNumberField.fill(faker.phone.number());

        await this.createAccountPage.countrySelect.selectOption({ label: 'Colombia' });
        await this.createAccountPage.cityField.fill(faker.location.city());
        await this.createAccountPage.addressField.fill(faker.location.streetAddress());
        await this.createAccountPage.stateField.fill(faker.animal.petName());
        await this.createAccountPage.zipCodeField.fill(faker.location.zipCode());

        await this.createAccountPage.termsCheckbox.check();
        await this.createAccountPage.registerButton.click();
    }

    getUserName(): string {
        return this.userName;
    }
}