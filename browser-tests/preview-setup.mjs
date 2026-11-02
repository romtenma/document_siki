import { fileURLToPath } from 'node:url'
import { serve } from 'vitepress'
import { once } from 'node:events'

// Own the HTTP server directly so teardown also completes on Windows,
// without using a shell process tree to stop the preview.
export default async function setup() {
  const preview = await serve({
    root: fileURLToPath(new URL('../manual/', import.meta.url)),
    port: 4173
  })
  if (!preview.server.listening) await once(preview.server, 'listening')
  // VitePress 1.x does not expose a preview host option. Rebind its server
  // explicitly to loopback before running any browser checks.
  await new Promise(resolve => preview.server.close(resolve))
  await new Promise((resolve, reject) => {
    preview.server.once('error', reject)
    preview.server.listen(4173, '127.0.0.1', resolve)
  })
  return async () => {
    preview.server.closeAllConnections()
    await new Promise((resolve, reject) => preview.server.close(error => error ? reject(error) : resolve()))
  }
}
