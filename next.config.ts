import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: "/shaofei-liu-portfolio",
        assetPrefix: "/shaofei-liu-portfolio",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
