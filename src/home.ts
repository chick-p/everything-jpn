import { html } from "hono/html";

export const Layout = (props: { title: string; children: string }) =>
  html`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${props.title}</title>
        <link rel="stylesheet" href="/static/css/reset.css" />
        <link rel="stylesheet" href="/static/css/styles.css" />
        <link rel="icon" href="/static/favicon.svg" />
        <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
      </head>
      <body>
        <main class="c-main">
          <h1>🗾 ${props.title}</h1>
          ${props.children}
        </main>
      </body>
      <script src="/static/js/index.js"></script>
    </html>`;

const content = (props: { selfUrl: string; p: string }) => {
  const { selfUrl, p } = props;
  return html`
    <section class="c-map-container" data-p=${p}></section>
    <section class="c-favorite-url">
      <label for="favorite_url" class="c-favorite-url--label">URL</label>
      <input
        id="favorite_url"
        type="url"
        class="c-favorite-url--input"
        value="${selfUrl}svg?p=${p}"
        readonly
      />
      <button class="js-copy-button c-copy--button">Copy URL</button>
    </section>
    <section>
      <details>
        <summary class="c-load-url--summary">Load from SVG URL</summary>
        <label for="load_url" class="c-load-url--label">URL</label>
        <input id="load_url" type="url" class="c-load-url--input" value="" />
        <button class="js-load-button c-load--button">Load URL</button>
        <p class="js-svg-url-warning c-svg-url-warning">
          Require to input SVG URL
        </p>
      </details>
    </section>
  `;
};

export const Home = async (props: {
  appName: string;
  selfUrl: string;
  p: string;
}) => {
  const { appName, selfUrl, p } = props;
  const children = await content({ selfUrl, p });
  return html` ${Layout({ title: appName, children })} `;
};
