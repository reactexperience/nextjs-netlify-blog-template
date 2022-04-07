module.exports = ({
  pageExtensions: ["tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
          target: "serverless",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
        
      ]
    );
    return config;
  },
});
