import { html } from "hono/html";

export const Layout = (props: {
  title: string;
  children: string;
}) => html`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${props.title}</title>
      <link rel="stylesheet" href="/static/css/reset.css" />
      <link rel="stylesheet" href="/static/css/styles.css" />
    </head>
    <body>
      <main class="c-main">
        <h1>🗾 ${props.title}</h1>
        ${props.children}
      </main>
    </body>
    <script src="/static/js/index.js"></script>
  </html>`;

const content = () => {
  return html`
    <section class="c-map-container"></section>
  `;
};

export const Home = async (props: { appName: string }) => {
  const children = await content();
  return html` ${Layout({ title: props.appName, children })} `;
};
