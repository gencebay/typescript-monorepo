module.exports = {
  rootDir: __dirname,
  collectCoverageFrom: [
    "packages/**/*.(t)s?(x)",
    "!packages/**/*.d.ts",
    "!**/*-test.{js,ts,tsx}",
    "!**/node_modules/**",
  ],
  projects: ["<rootDir>/packages/*/jest*config.js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
