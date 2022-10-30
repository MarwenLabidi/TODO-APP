import { test, expect } from '@playwright/experimental-ct-react';
import DAMAN from './index';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(<DAMAN></DAMAN>);
  await expect(component).toContainText('DAMAN');
});