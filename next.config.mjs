import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// TODO: set to '' once DNS migration is complete and site is served at apex of nexteducationai.org.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/nexteducationai';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  turbopack: { root: __dirname },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
