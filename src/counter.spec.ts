import { counterFn } from './counter';

test('should be true for the following', () => {
  const [getA, nextA] = counterFn(1);
  const [getB, nextB] = counterFn(20);
  const [getC, nextC] = counterFn(16);
  expect(getA()).toBe(1);
  nextA()
  expect(getA()).toBe(2);
  nextA()
  expect(getB()).toBe(20);
  nextB();
  expect(getB()).toBe(21);
  nextB();
  nextC();
  expect(getA()).toBe(3);
  expect(getB()).toBe(22);
  expect(getC()).toBe(17);
});