// jest.config.js

module.exports = {
  // Roots for test files (where Jest should look for tests)
  roots: ['<rootDir>/src'],

  // Test environment. 'jsdom' provides a browser-like environment.
  testEnvironment: 'jsdom',

  // Module file extensions Jest should look for.
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

  // Regex to transform files with babel-jest.
  // This tells Jest to process .js and .jsx files using Babel.
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // Regex for files that are considered test files.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',

  // Setup files to run before each test file.
  // This imports @testing-library/jest-dom for custom matchers.
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Will create this file next
};
