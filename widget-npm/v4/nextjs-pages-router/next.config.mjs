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

// https://github.com/uiwjs/next-remove-imports
export default removeImportsFun({
  ...nextConfig,
  webpack(config, options) {
    return config
  }
})
