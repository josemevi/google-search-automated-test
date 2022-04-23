// playwright.config.js
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  
  reporter: [
    ['list'],
    ['json', {  outputFile: 'results/test-results.json' }]
  ],
  use: {
    trace: 'on-first-retry',
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  //Undo the commented lines if you desire to use extra or another browser 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // }
  ],
};

module.exports = config;