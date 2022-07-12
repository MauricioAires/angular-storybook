/**
 * A pasta de paginas está sendo adicionada
 * apenas para caso de estudos,
 */
module.exports = {
  stories: [
    '../src/app/components/**/stories.ts',
    '../src/app/pages/**/stories.ts'
  ],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/angular',
  core: {
    builder: '@storybook/builder-webpack5'
  }
}
