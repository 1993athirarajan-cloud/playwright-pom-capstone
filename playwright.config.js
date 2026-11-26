const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
    testDir: './tests',

    use: {
        baseURL: process.env.BASE_URL,
        headless: false,
        screenshot: 'on',
        video:'retain-on-failure',
        trace: 'retain on failure'
    },

    reporter: [
  ['list'],
  ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ['allure-playwright', { resultsDir: 'allure-results' }]
],

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ]
});