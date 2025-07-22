/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // permet l'exportation statique
  reactStrictMode: true,
  images: {
    unoptimized: true, // ✅ désactive l’optimisation d’image incompatible avec 'export'
  },
};

export default nextConfig;
