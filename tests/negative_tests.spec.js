const { test, expect } = require('@playwright/test');

test.describe('Negative Functional Test Cases - Singlish to Sinhala', () => {

  test('Neg_Fun_0001 - Empty input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mokakdha karala oyaa');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('ඔයා මොකක්ද කරෙ.');
  });


  test('Neg_Fun_0002 - Only spaces input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('igenagannawaedakaragannadenna');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('ඉගෙන ගන්න වැඩ කරගන්න දෙන්න.');
  });

  test('Neg_Fun_0003 - Numbers only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('$$$$mokadha karanne^^^&&&');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('මොකද කරන්නේ.');
  });

  test('Neg_Fun_0004 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('You can go?');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('You can go?');
  });

  
  test('Neg_Fun_0005 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('oya anidhdhata giyaa.');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('ඔය අනිද්දට ගියා.');
  });



  test('Neg_Fun_0006 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill(' oiaa serappu dhammadha');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('ඔය සෙරප්පු දැම්මද');
  });


  test('Neg_Fun_0007 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('');
  });


  test('Neg_Fun_0008 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('URL eka matta evanna puluvandha?');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('URL එක මට්ට එවන්න පුලුවන්ද?');
  });


  test('Neg_Fun_0009 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mata 1ka pothak thibbanam hodhatama aethi.');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('මට එක පොතක් තිබ්බනම් හොදටම ඇති.');
  });


  test('Neg_Fun_0010 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('heta kadeta aavaa');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('හෙට කඩෙට එනවා');
  });

});