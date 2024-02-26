module.exports = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    'shared/(.*)': '<rootDir>/src/shared/$1',
    'modules/(.*)': '<rootDir>/src/modules/$1'
  }
}
