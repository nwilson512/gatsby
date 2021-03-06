module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "techwriting",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
