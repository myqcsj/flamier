const {
  mergeConfig
} = require('vite');
const viteTsConfigPaths = require('vite-tsconfig-paths').default;
module.exports = {
  stories: ['../src/lib/**/*.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],
  async viteFinal(config, {
    configType
  }) {
    return mergeConfig(config, {
      plugins: [viteTsConfigPaths({
        root: '../../../../'
      })]
    });
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: true
  }
};

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs