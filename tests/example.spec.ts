import { test, expect } from '@playwright/test';

test.only('first exercise', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Get started' }).click(); 

  await page.getByRole('button',{name:'Node.js'}).hover();

  //this code thrwos error
  
  //await page.getByText('Java', {exact:true}).click();

  //this is mine
  await page.getByRole('link', { name: 'Java',exact:true }).click(); 



  // Expect a title "to contain" a substring.

  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');

  await expect(page.getByText('Installing Playwright',{exact:true})).not.toBeVisible();

  var text_displayed="Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.";


  await expect(page.getByText(text_displayed)).toBeVisible();

//   await expect(page).toHaveTitle(/Playwright/);
//   await expect(page).


});


