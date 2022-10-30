// @ts-check
import { test, expect } from "@playwright/test";

const TODO_ITEMS = [
        "buy some cheese",
        "feed the cat",
        "book a doctors appointment",
];

test.beforeEach(async ({ page }) => {
        await page.goto("https://todo-app-97ae2.firebaseapp.com/");
});

test("App has TODO-APP in title", async ({ page }) => {
        await expect(page).toHaveTitle("TODO-APP");
});

test.describe("New Todo", () => {
        test("should allow me to add todo items", async ({ page }) => {
                // Create 1st todo.
                await page
                        .getByRole("textbox", { name: "input" })
                        .fill(TODO_ITEMS[0]);
                await page
                        .getByRole("textbox", { name: "input" })
                        .press("Enter");

                // Make sure the list only has one todo item.
                await expect(
                        page.locator(
                                "xpath=//body[1]/main[1]/div[3]/div[1]/div[2]/div[1]/ul[1]"
                        )
                ).toHaveText([TODO_ITEMS[0]]);

                await checkNumberOfTodosInLocalStorage(page, 1);
        });
        test("should clear text input field when an item is added", async ({
                page,
        }) => {
                // Create one todo item.
                await page
                        .getByRole("textbox", { name: "input" })
                        .fill(TODO_ITEMS[0]);
                await page
                        .getByRole("textbox", { name: "input" })
                        .press("Enter");
                //wait for elemetn to be visible
                await page.waitForSelector("text=buy some cheese");  
                // Check that input is empty.
                await expect(
                        page.locator(
                                "xpath=//body/main[@id='root']/div[3]/div[1]/div[1]/input[1]"
                        )
                ).toBeEmpty();
        });
});

async function checkNumberOfTodosInLocalStorage(page, expected) {
        return await page.waitForFunction((e) => {
                return JSON.parse(localStorage["TasksOffline"]).length === e;
        }, expected);
}
