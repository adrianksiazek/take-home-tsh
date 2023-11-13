import { test, expect } from '@playwright/test';

import { AppRoute } from '../../src/routing/AppRoute.enum';
import { homePageActions } from '../actions/homePage';

test.describe('Header', () => {
  test('should elements in header be visable', async ({ page }) => {
    await homePageActions.openHomePage(page);

    const logo = page.getByTestId('pw-logo');
    const loginBtn = page.getByTestId('pw-login-btn');
    const promoCheckbox = page.getByTestId('pw-checkbox-promo');
    const activeCheckbox = page.getByTestId('pw-checkbox-active');
    const searchInput = page.getByTestId('pw-search');

    await expect(logo).toHaveAttribute('href', AppRoute.home);
    await expect(logo.first()).toBeVisible();

    await expect(loginBtn).toHaveAttribute('href', AppRoute.login);
    await expect(loginBtn.first()).toBeVisible();

    await expect(promoCheckbox.first()).toBeVisible();
    await expect(activeCheckbox.first()).toBeVisible();

    await expect(searchInput.first()).toBeVisible();
  });
});
