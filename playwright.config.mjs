import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './browser-tests',
  fullyParallel: false,
  workers: 1,
  reporter: 'list',
  outputDir: 'verification-output/browser',
  globalSetup: './browser-tests/preview-setup.mjs',
  use: {
    baseURL: 'http://127.0.0.1:4173/document_siki/',
    channel: process.env.MANUAL_BROWSER_CHANNEL || (process.platform === 'win32' ? 'msedge' : undefined),
    viewport: { width: 1440, height: 1000 },
    colorScheme: 'light',
    locale: 'ja-JP',
    screenshot: 'only-on-failure'
  }
})
