const { test, expect } = require('@playwright/test');

test.describe('Positive Functional Test Cases - Singlish to Sinhala', () => {

  test('Pos_Fun_0001 - Simple sentence conversion', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('oyaa sanipendha?');

    await expect(outputBox).not.toHaveValue('', { timeout: 20000 });

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0002 - Greeting conversion', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama bodimata yanava.');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0003 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('api pothak kiyavanava saha potha paadam karanava');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

  
  
  test('Pos_Fun_0004 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('oya havasata enavanam mama balan innam.');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0005 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('vahaama enu!');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0006 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama ehema karanne naehae');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

   

  test('Pos_Fun_0007 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('oyaata puluvandha mata udhavvak karanna.');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0008 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill(' supiri machan');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0009 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('api karana project eka gena kathakaraganna meeting ekak heta thiyenava.');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0010 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama gedhara enava.');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0011 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama iye gedhara giyaa.');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0012 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('api gedhara yamu');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0013 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama kadeeta yanava.');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0014 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('meekata Rs.100,000 k gevanna oni.');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0015 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill(' adha 7.00p.m okkotama puluvandha');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0016 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('api badulla  pansal yamu.');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });



  test('Pos_Fun_0017 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('oya hodhindha?');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });



  test('Pos_Fun_0018 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('haa haa eyaa kiyanne aeththa.');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });



  test('Pos_Fun_0019 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('heta kattiyata present karanna thiyena project presentation eka hadhala ivaradha.');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0020 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama kadeeta yanava.oyath enavadha?');                                                                         

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });



  test('Pos_Fun_0021 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama adha havas venavaa gedhara enna . oyaata puluvannam heta hambenna dhagamudha . mata heta dhavasama puluvan.');
                                                                         

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });




  test('Pos_Fun_0022 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('samavenna , magen ath vaeradhimak une');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });




  test('Pos_Fun_0023 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('campus ID eka dhaekkadha.');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });




  test('Pos_Fun_0024 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama hithan inne me nivaaduve aevidinna yanna dhemodhara paeththata ee nisaa nivaduva patan ganna kalinma yanna oni thaen tika hadagena thiyagaththanam leesi.Oyath kamathinam yamu api okkoma ethakota api okkotama vinoodha vennath puluvan , oya kaemathinam kiyanna.');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });



  


  

});


