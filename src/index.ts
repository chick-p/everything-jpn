import { Hono } from 'hono'
import { svg } from './svg'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/svg', (c) => {
  c.status(200);
  c.header("Content-Type", "image/svg+xml");
  return c.body(svg);
})

export default app
