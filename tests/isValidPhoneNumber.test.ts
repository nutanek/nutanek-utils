import isValidPhoneNumber from '../src/isValidPhoneNumber'
import { expect, test } from 'vitest'

test('isValidPhoneNumber', () => {
  expect(isValidPhoneNumber('+1234567890')).toBe(true)
  expect(isValidPhoneNumber('1234567890')).toBe(true)
  expect(isValidPhoneNumber('123-456-7890')).toBe(false)
  expect(isValidPhoneNumber('123.456.7890')).toBe(false)
  expect(isValidPhoneNumber('1234567890123456')).toBe(false)
  expect(isValidPhoneNumber('+1234567890123456')).toBe(false)
  expect(isValidPhoneNumber('')).toBe(false)
  expect(isValidPhoneNumber('abc')).toBe(false)
})
