/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "blogpfthumb-phinf.pstatic.net" },
      { protocol: "https", hostname: "postfiles.pstatic.net" }
    ]
  }
};

export default nextConfig;
