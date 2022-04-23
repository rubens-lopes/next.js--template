import { test, expect } from '@playwright/test'

test('should navigate to home', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toContainText('Peladeiros')
})