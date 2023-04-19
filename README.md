# Reproduction repo for NextJS issues

This contains repros for:

- vercel/next.js#48305
- vercel/next.js#46648

The only changes from the [base installation](https://beta.nextjs.org/docs/installation) were:

- Adding `basePath: '/test/path'` to `next.config.js`
- Adding example pages in `/app` and `/pages`

This repo is hosted at https://nextjs-proxy-test-ten.vercel.app/test/path

## Soft navigation not working on [dynamic segments] when using nextConfig.basePath & new /app directory [#48305](vercel/next.js#48305)

Open inspector, and go to https://nextjs-proxy-test-ten.vercel.app/test/path

You can see that preloads to routes with dynamic segments, or any routes inside `/pages`, result in a 404:

![Screenshot of inspector showing 404s](https://github.com/Sprokets/nextjs-proxy-test/blob/main/screenshot-inspector-404s.png?raw=true)

Clicking on any of those links navigates to the correct page, but with a full page load. The same 404 behavior happens on any of the pages.

Other notes:

The 404 that shows in inspector entirely skips any error handling in the `/app` folder (ie `not-found.js`,`error.js`, `global-error.js`). To effect any change in the error output, I had to add a `/pages/_error.js` file.

## Links at basePath not working for random internal links [#46648](vercel/next.js#46648)

Go to https://nextjs-proxy-test-ten.vercel.app/test/path/pages-page

Follow any link on that page. You'll see:

- Hovering over the link shows the correct URL
- Clicking the link results in the `basePath` being added twice.

---

## Default readme below:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
