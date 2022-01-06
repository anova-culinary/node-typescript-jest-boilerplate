module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  },
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', '!**/*.d.ts'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', "fixture\\.ts$",
    "scripts"],
  transformIgnorePatterns: [
    'node_modules/(?!(@?react-native.*|@?react-navigation.*|@segment.*|@anova-culinary.*|rn-fetch-blob)/)'
  ],
  setupFilesAfterEnv: [
    "<rootDir>setupTests.js"
  ]
};
