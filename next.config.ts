import type { NextConfig } from "next";

// GitHub Pages serves this repo at chmp-dev.github.io/naturi/, not from
// the domain root, so every asset and route needs that prefix — but only
// for the GH Pages build. Local dev keeps basePath empty.
const isGhPages = process.env.GITHUB_PAGES === "true";
const basePath = isGhPages ? "/naturi" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    // Static export has no image server to optimize through.
    unoptimized: true,
  },
};

export default nextConfig;
