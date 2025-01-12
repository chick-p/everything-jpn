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
  </html>`;

const content = () => {
  return html`
    <section>
      <img src="/svg?p=40,41" alt="Map Image" width="500" />
    </section>
  `;
};

export const Home = async (props: { appName: string }) => {
  const children = await content();
  return html` ${Layout({ title: props.appName, children })} `;
};
