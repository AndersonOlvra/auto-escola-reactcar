module.exports = {
  stories: [
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/styles/**/*.stories.(js|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
  ],
};
