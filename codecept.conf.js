exports.config = {
  tests: './tests/**/*.test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: `http://localhost:3000`,
      show: true,
      windowSize: '1200x2000',
      browser: 'chromium',
    },
  },
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
  multiple: {
    webkit: {
      browsers: ['webkit'],
    },
    firefox: {
      browsers: ['firefox'],
    },
    chrome: {
      browsers: ['chromium'],
    },
    parallel: {
      chunks: 1,
      browsers: ['webkit', 'firefox', 'chromium'],
    },
  }
};