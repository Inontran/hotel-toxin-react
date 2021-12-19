module.exports = {
  core: {
    builder: 'webpack5',
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-dark-mode',
    '@storybook/builder-webpack5',
    '@storybook/preset-scss',
  ],
  "framework": "@storybook/react",
};
