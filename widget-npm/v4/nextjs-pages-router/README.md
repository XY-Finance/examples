## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Troubleshooting

### [Global CSS cannot be imported from within node_modules.](https://nextjs.org/docs/messages/css-npm)

#### Why?

This is a feature of the Next.js pages router, which cannot import `.css` files directly from node_modules.

The error occurs because our widget injects a `.css` file during the build process.

#### Solution

1. Install the [next-remove-imports](https://github.com/uiwjs/next-remove-imports) in your project.

```
npm install next-remove-imports
```

2. Modify your `next.config.mjs` file.

```mjs
// next.config.mjs
import removeImports from 'next-remove-imports'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

/** @type {function(import("next").NextConfig): import("next").NextConfig}} */
const removeImportsFun = removeImports({
  test: /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/,
  matchImports: '\\.(less|css|scss|sass|styl)$'
})

export default removeImportsFun({
  ...nextConfig,
  webpack(config, options) {
    return config
  }
})
```

3. Manually import the .css file.

```ts
import '@xyfinance/widget/dist/index.css'
import dynamic from 'next/dynamic'

const Widget = dynamic(
  () => import('@xyfinance/widget').then((module) => module.Widget),
  {
    ssr: false
  }
)

export function XyFinanceWidget() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: '0px auto'
      }}
    >
      <div
        style={{
          width: '480px'
        }}
      >
        <Widget config={config} theme={theme} />
      </div>
    </div>
  )
}
```
