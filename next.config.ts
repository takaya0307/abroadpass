import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "workingholidaypass.jp" }],
        destination: "https://abroadpass.jp/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.workingholidaypass.jp" }],
        destination: "https://abroadpass.jp/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
