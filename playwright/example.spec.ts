import { expect, test } from "@playwright/test"

test.describe("landing page", () => {
  test("given any user: shows the test user", async ({ page }) => {
    await page.goto("/")

    await expect(page.getByText("Khash-Erdene Bolor-Erdene")).toBeVisible()
    await expect(page.getByText("testk@gmail.com")).toBeVisible()
  })
})
