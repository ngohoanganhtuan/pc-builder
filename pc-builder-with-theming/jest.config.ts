export default {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/support/setupTests.ts'],

  // Modules that are mapped.
  moduleNameMapper: {
    '@components': '<rootDir>/src/components',
    '@constants': '<rootDir>/src/constants',
    '@contexts': '<rootDir>/src/contexts',
    '@enums': '<rootDir>/src/enums',
    '@helpers': '<rootDir>/src/helpers',
    '@hooks': '<rootDir>/src/hooks',
    '@interfaces': '<rootDir>/src/interfaces',
    '@pages': '<rootDir>/src/pages',
    '@store': '<rootDir>/src/store',
    'database.json': '<rootDir>/src/database.json',
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
  },

  // Collect coverage from files with format look like those below:
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**', '!**/*.{test,stories}.{js,ts,tsx}'],
};
