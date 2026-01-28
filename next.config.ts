import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", //추가
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://daeeunlab.github.io/daeeun-farm-privacy-policy/"
      : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
