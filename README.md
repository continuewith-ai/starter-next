# starter-next

Minimal [Next.js](https://nextjs.org) App Router template with the [ContinueWith](https://continuewith.ai) AI-native continuation layer, `llms.txt`, and AI Ready Index links.

[![Use this template](https://img.shields.io/badge/Use%20this%20template-2ea44f?style=for-the-badge&logo=github)](https://github.com/continuewith-ai/starter-next/generate)

## What's included

- ContinueWith widget in `app/layout.tsx` (demo key `cw_demo_public_key`)
- Starter `public/llms.txt` for agents and crawlers
- Landing page with CTAs to dashboard, docs, and [AI Ready scanner](https://ready.continuewith.ai/scan)

## Quick start

```bash
git clone https://github.com/continuewith-ai/starter-next.git my-app
cd my-app
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure your site key

1. Create a free account at [continuewith.ai/dashboard](https://continuewith.ai/dashboard)
2. Copy your **public site key**
3. Set `NEXT_PUBLIC_CONTINUEWITH_SITE_KEY` in `.env.local`

Or run:

```bash
npx continuewith add --framework nextjs
npx continuewith verify
```

## AI Ready Index

- [Scan your site](https://ready.continuewith.ai/scan)
- [Get listed](https://ready.continuewith.ai/submit)
- [Browse directory](https://ready.continuewith.ai/directory)

## Related repos

| Repo | Description |
|------|-------------|
| [cli](https://github.com/continuewith-ai/cli) | `npx continuewith add` |
| [sdk](https://github.com/continuewith-ai/sdk) | Snippet helpers |
| [mcp](https://github.com/continuewith-ai/mcp) | MCP for coding agents |
| [awesome-continuewith](https://github.com/continuewith-ai/awesome-continuewith) | Curated links |

## License

MIT © [ContinueWith](https://continuewith.ai)
