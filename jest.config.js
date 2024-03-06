module.exports = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],
  coverageProvider:  "v8",
  testEnvironment: 'node',
  transform: {
    "^.+\\.ts?$":[ 
      "@swc/jest",
      {
        "jsc": {
          "parser": {
            "syntax": "typescript",
            "decorators": true
          },
          "transform": {
            "decoratorMetadata": true
          }
        }
      }
    ],
  },
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1'
  }
}
