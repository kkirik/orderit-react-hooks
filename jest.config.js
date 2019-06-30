module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleFileExtensions: ["ts", "tsx", "json", "js", "png"],
  moduleNameMapper: {
    "^app/(.*)": "<rootDir>/src/app/$1",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts",
  },
  moduleDirectories: ["node_modules", "src", "assets"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
};
