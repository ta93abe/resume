const { withSentryConfig } = require("@sentry/nextjs");

const sentryWebpackPluginOptions = {
	silent: true,
	authToken: process.env.SENTRY_AUTH_TOKEN,
	org: process.env.SENTRY_ORG,
	project: process.env.SENTRY_PROJECT,
};

const moduleExports = { reactStrictMode: true };
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	option: { remarkPlugins: [], rehypePlugins: [] },
});

module.exports =
	withMDX({ pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"] });
