/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true };

module.exports = nextConfig;

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	option: { remarkPlugins: [], rehypePlugins: [] },
});

module.exports =
	withMDX({ pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"] });
