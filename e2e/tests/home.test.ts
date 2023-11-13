import { test, expect } from '@playwright/test';

import { homePageActions } from '../actions/homePage';

test.describe('Home Page', () => {
  test('show with limit products', async ({ page }) => {
    await homePageActions.openHomePage(page);
    page.waitForLoadState('domcontentloaded');

    const product = await page.getByTestId('pw-product');

    await expect(product).toHaveCount(8);
  });

  // test('search for a product', async ({ page }) => {
  //   await homePageActions.openHomePage(page);

  //   await page.getByTestId('pw-search').fill('Pizza');

  //   const product = await page.getByTestId('pw-product');

  //   await expect(product.first()).toContainText(/Pizza/);
  // });

  // test('show product modal', async ({ page }) => {
  //   await homePageActions.openHomePage(page);

  //   await page.getByRole('button', { name: 'Show details' }).first().click();

  //   const productModal = await page.getByTestId('pw-modal');

  //   await expect(productModal.first()).toBeVisible();
  // });

  // test('filter promo products', async ({ page }) => {
  //   await homePageActions.openHomePage(page);

  //   await page.getByTestId('pw-checkbox-promo').check();

  //   const productItems = await page.getByTestId('pw-product').all();

  //   for (const productItem of productItems) {
  //     const hasBanner = productItem.getByTestId('pw-product-banner-promo');

  //     await expect(hasBanner).toBeVisible();
  //   }
  // });

  // test('filter active products', async ({ page }) => {
  //   await homePageActions.openHomePage(page);

  //   await page.getByTestId('pw-checkbox-active').check();

  //   const productItems = await page.getByTestId('pw-product').all();

  //   for (const productItem of productItems) {
  //     const button = productItem.getByTestId('pw-product-btn');

  //     await expect(button).toBeEnabled();
  //   }
  // });
});
