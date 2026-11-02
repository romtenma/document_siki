import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './browser-tests',
  fullyParallel: false,
  workers: 1,
  reporter: 'list',
  outputDir: 'verification-output/browser',
  use: {
    baseURL: 'http://127.0.0.1:4173/document_siki/',
    channel: process.env.MANUAL_BROWSER_CHANNEL || (process.platform === 'win32' ? 'msedge' : undefined),
    viewport: { width: 1440, height: 1000 },
    colorScheme: 'light',
    locale: 'ja-JP',
    screenshot: 'only-on-failure'
  },
  webServer: {
    command: 'npm run docs:preview -- --port 4173 --strictPort',
    url: 'http://127.0.0.1:4173/document_siki/',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000
  }
})
