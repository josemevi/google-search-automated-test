const { test, expect } = require('@playwright/test');
const { CommonFunctions } = require("../common/test-common-functions");
const { properties } = require('../common/tests-properties');

var results = [];

//Describing the properties and grouping the steps that're needed to be made before each one since the two properties are very similar
test.describe('Automation Test For Google Search', () => {
  test.beforeEach(async ({ page }) => {

    // Navigate to target URL
    await page.goto(properties.targetUrl);

    //Wait for Search Policy Modal (only appears in EU countries)
    await page.locator('[id="L2AGLb"]').waitFor();

    //Click on "Accept" inside the Modal
    await page.locator('[id="L2AGLb"]').click();

    //Click inside the search bar input
    await page.locator('[name="q"]').click();

    //Fill the input with the target keywords
    await page.locator('[name="q"]').fill('Orange Bank');

    //Press Enter to execute the search
    await page.locator('[name="q"]').press('Enter');

    //Wait for the DIV containing the result stats to ve available
    await page.locator('[id="result-stats"]').waitFor();

    //Picking the result stats with a CSS Selector for id attribute
    let element = await page.$("#result-stats");

    //Picking the innerHTML of the result stats element
    element = await element.innerHTML();

    //Getting formatted info array containing the total results of the search and the time
    results = CommonFunctions.getResultNumberAndTime(element);
  });

  //Success Test
  test('Navigate Success', async ({ page }) => {

    //Assertion to meet the desire condition
    await expect(results[0]).toBeGreaterThan(properties.successCondition);
  });

  //Failure Test
  test('Navigate Failure', async ({ page }) => {

    //Assertion to meet the desire condition
    await expect(results[0]).toBeLessThan(properties.failureCondition);
  });

});