# dashral-starter-inset

A blank Next.js admin dashboard, ready to build on: the **Inset** template of [Dashral](https://dashral.com), made with
`npx create-dashral` (Dashral 1.1.1) and left as it came out. One empty page and Settings in the dashboard, the sign-in,
sign-up and two-factor pages, English, and the UI components from npm
([`@dashral/ui`](https://www.npmjs.com/package/@dashral/ui)).

It's the same project this command makes:

```bash
npx create-dashral my-app --template inset --pages blank --languages en --customizer remove
```

Take it as it is: **Use this template** on GitHub (a copy of your own, without this history), or clone or download it,
then:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | |
| --- | --- |
| `pnpm dev` | `next dev --port 3000` |
| `pnpm build` | `next build` |
| `pnpm start` | `next start` |
| `pnpm typecheck` | `next typegen && tsc --noEmit` |
| `pnpm lint` | `eslint .` |

Want the demo pages, other languages, the theme customizer, your own name and look, or the Classic template? Run `npx create-dashral` and
answer its questions instead. See the [live demo](https://demo.dashral.com) first.

## Where things are

| What | Where |
| --- | --- |
| Pages | `app/` |
| The app's own components | `components/` |
| The menu | `lib/nav.ts` |
| Name, description and links | `lib/site.ts` |
| Text in each language | `messages/<locale>/` |
| Theme presets | `app/theme-presets.css` |

The UI components come from [`@dashral/ui`](https://www.npmjs.com/package/@dashral/ui): `import { Button } from
"@dashral/ui/components/button"`. Their docs and examples are at [dashral.com/components](https://dashral.com/components).

## Updates

`pnpm up @dashral/ui` brings in new components and fixes. To change a component's own code, copy it into the app from
Dashral's registry (`npx shadcn add https://dashral.com/r/button.json`) and import it from there instead.

## Add sign-in

The sign-in, sign-up and two-factor pages (`app/(auth)/`) are designed and ready, without accounts behind them. Connect
them to the auth library you use:

1. `lib/sign-in.ts`: where the forms and the account menu's Sign out go, your sign-in route or server action.
2. `lib/account.ts`: the person the account menu shows; read it from your session.
3. Keep signed-out visitors out of the dashboard in a `proxy.ts` (Next.js's request middleware), as your library
   describes.

[Dashral Pro](https://dashral.com/pricing) comes with real sign-in: accounts, roles, two-factor and passkeys.

## Put it online

Deploy to Vercel or any Node host, and set your address in `NEXT_PUBLIC_SITE_URL` (see `.env.example`).

Built on Dashral, MIT licensed (see `LICENSE`).
