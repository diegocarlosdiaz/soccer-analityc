import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    API_URL: process.env.API_URL, // Accesible en cliente y servidor
  }
};

export default nextConfig;
