/** @type {import('next').NextConfig} */
import { v4 } from 'uuid'
import withPWA from 'next-pwa'
import runtimeCaching from 'next-pwa/cache.js'
import withPlugins from 'next-compose-plugins'
import withBundleAnalyzer from '@next/bundle-analyzer'
import withPreact from 'next-plugin-preact'
//TODO Fix problem next/dynamic suspense and preact

import pages from './routes.js'

const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['beta.victorgomez.dev', 'static.wixstatic.com'],
    formats: ['image/avif', 'image/webp'],
  },
  generateBuildId: async () => {
    return 'alpesCap-landing-page-v2.0-build-id-' + v4().toString()
  },
  //Customize webpack config
  webpack(config) {

    //* Enabling inline-svg/svg-modules support
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/]
      },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: { plugins: [{ removeViewBox: false }] },
            titleProp: true,
          },
        },
      ],
    })

    //* Adding support for static serving of .gltf 3D files
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: "/_next/static/models",
          outputPath: "static/models/",
          name: '[name].[ext]'
        }
      },
    })
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: "/_next/static/pdf",
          outputPath: "static/pdf/",
          name: '[name].[ext]'
        }
      },
    })

    return config
  },
  
  //* Like env files
  //* More info here https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
  serverRuntimeConfig: {
    allRoutes: pages,
  },
  publicRuntimeConfig: {
    routes: pages.filter(page => page.navShow),
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
}

export default withPlugins([
  withBundleAnalyzer({enabled: process.env.ANALYZE === 'true'}), 
  [withPWA, {pwa: {
    runtimeCaching, 
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',

    //? Docs recomend removing .next/static/images from caching rules
    //? for next's optimized-images-plugin to work properly
    buildExcludes: [/chunks\/images\/.*$/]
  }}],
  withPreact,
], config)