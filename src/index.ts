import { Hono } from 'hono'
import { paintSvg } from './svg'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/svg', (c) => {
  const prefectures = c.req.query('p')?.split(',').map(v => Number(v)) ?? [];

  const svg = paintSvg(prefectures);
  c.status(200);
  c.header("Content-Type", "image/svg+xml");
  return c.body(svg);
})

export default app
