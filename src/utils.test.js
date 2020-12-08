import { getRandomNumber, isValidEmail } from './utils.js'

describe('Random Number', () => {
  test('should generate different random numbers', () => {
    const numberA = getRandomNumber();
    const numberB = getRandomNumber();
    expect(numberA).not.toBe(numberB);
  });
});

describe('Verify Email', () => {
  test('should invalid an empty email', () => {
    expect(isValidEmail('')).toBeFalsy();
  });

  test('should invalid an email without an @ symbol', () => {
    expect(isValidEmail('cristhiamaya.com')).toBeFalsy();
  });

  test('should invalid an email without a domain', () => {
    expect(isValidEmail('cristhiamaya@gmail')).toBeFalsy();
  });

  test('should valid a complete email', () => {
    expect(isValidEmail('cristhiamaya@gmail.com')).toBeTruthy();
  });
});