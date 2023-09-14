module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": ["ts-jest"],
  },
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
  testTimeout: 10000,
};
