import { expect, test } from '@playwright/test'

test('smoke', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByTestId('hydrated')).toBeAttached()

  await expect(
    page.getByRole('heading', { name: '@jill64/npm-demo-layout' })
  ).toBeVisible()

  await expect(page.getByText('This is Page')).toBeVisible()
})
