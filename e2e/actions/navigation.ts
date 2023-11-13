import { Page, expect } from '@playwright/test';

import { AppRoute } from '../../src/routing/AppRoute.enum';

const navigateToHomePage = async (page: Page) => {
  const link = page.getByRole('link', { name: 'Home' });

  await expect(link).toHaveAttribute('href', AppRoute.home);
  await link.click();

  await expect(page).toHaveURL('');
};

export const navigationActions = {
  navigateToHomePage,
};
