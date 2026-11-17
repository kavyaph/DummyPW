import{test, expect} from '@playwright/test'
test('google page vrification', async({page})=>{
await page.goto('https://www.google.com');
await expect(page).toHaveTitle(/Facebook/);
await page.screenshot({path:'google-homepage.png',fullPage: true})
});