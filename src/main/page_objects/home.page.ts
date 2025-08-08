import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly homeUserButton: Locator
    readonly createAccountButton: Locator
    readonly userNameText: Locator

    constructor(page: Page) {
        this.homeUserButton = page.locator('#menuUser');
        this.createAccountButton = page.getByText('CREATE NEW ACCOUNT');
        this.userNameText = page.locator('span[class="hi-user containMiniTitle ng-binding"]');
    }
}
