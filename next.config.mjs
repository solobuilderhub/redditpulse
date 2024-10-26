/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/auth/login",
        destination: "/login",
        permanent: true,
      },
      {
        source: "/auth/signup",
        destination: "/register",
        permanent: true,
      },
      //auth/reset-password
      {
        source: "/auth/reset-password",
        destination: "/reset-password",
        permanent: true,
      },
      {
        source: "/auth/forgot-password",
        destination: "/forgot-password",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
