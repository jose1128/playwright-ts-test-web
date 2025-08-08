import { Page } from "@playwright/test";
import { HomePage } from "../page_objects/home.page";

export class HomeAction {
    private readonly homePage: HomePage;
    private readonly page: Page;

    private constructor(page: Page) {
        this.homePage = new HomePage(page);
        this.page = page;
    }

    static initialize(Page: Page): HomeAction {
        return new HomeAction(Page);
    }

    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async navigateToRegisterAccount(): Promise<void> {
        await this.homePage.homeUserButton.click();
        await this.homePage.createAccountButton.click();
    }

    async getUserNameText(): Promise<string> {
        return await this.homePage.userNameText.textContent() || '';
    }
}