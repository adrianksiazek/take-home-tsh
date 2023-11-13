import { Page, expect } from '@playwright/test';

import { AppRoute } from '../../src/routing/AppRoute.enum';

const openHomePage = async (page: Page) => {
  await page.goto(AppRoute.home);
  page.waitForLoadState('networkidle', { timeout: 3000 });

  await expect(page).toHaveTitle(/React App/);
};

export const homePageActions = {
  openHomePage,
};
