/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SWAPI_URL: "https://swapi.dev/api/"
  }
}

module.exports = nextConfig
