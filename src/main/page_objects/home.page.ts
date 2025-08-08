import { Locator, Page } from '@playwright/test';

export class HomePage {
    private readonly homeUserButton: Locator
    private readonly createAccountButton: Locator
    private page: Page;

    constructor(page: Page) {
        this.page = page;
        this.homeUserButton = this.page.locator('#menuUser');
        this.createAccountButton = this.page.getByText('CREATE NEW ACCOUNT');
    }

    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async navigateToRegisterAccount(): Promise<void> {
        await this.homeUserButton.click();
        await this.createAccountButton.click();
    }
}
