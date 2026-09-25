# everything-jpn

A simple web service that allows you to create your own Japan map by coloring prefectures. You can easily mark prefectures you have visited or lived in with simple click operations.

## Environment

- Cloudflare Workers

## Development

```bash
pnpm install
pnpm run dev
```

## Deployment

```bash
pnpm run deploy
```

## License

The source code of this project is licensed under the [MIT License](./LICENSE).

The Japan prefecture map data embedded in `src/svg.ts` is derived from
[geolonia/japanese-prefectures](https://github.com/geolonia/japanese-prefectures)
and is licensed separately under the GNU Free Documentation License (GFDL).
See [THIRD_PARTY_LICENSES.md](./THIRD_PARTY_LICENSES.md) for details.
