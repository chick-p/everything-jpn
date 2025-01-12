import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers';
import manifest from '__STATIC_CONTENT_MANIFEST'
import { paintSvg } from './svg'
import { Home } from './home';

const app = new Hono()
app.get('/static/*', serveStatic({ root: './', manifest }));

const appName = 'everything-jpn'

app.get('/', (c) => {
  const htmlContent = Home({ appName });
  return c.html(htmlContent);
})

app.get('/svg', (c) => {
  const prefectures = c.req.query('p')?.split(',').map(v => Number(v)) ?? [];

  const svg = paintSvg(prefectures);
  c.status(200);
  c.header("Content-Type", "image/svg+xml");
  return c.body(svg);
})

export default app
