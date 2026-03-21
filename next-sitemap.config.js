/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // TODO: Replace with your actual domain
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
