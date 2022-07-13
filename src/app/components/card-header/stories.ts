import { Meta, Story, componentWrapperDecorator } from '@storybook/angular'

import { CardHeaderComponent } from './card-header.component'

export default {
  component: CardHeaderComponent,
  title: 'Card/CardHeader',
  argTypes: {
    color: {
      options: ['white', 'blue', 'red'],
      control: { type: 'radio' }
    }
  }
} as Meta

const Template: Story<CardHeaderComponent> = (args) => ({
  props: args
})

export const Default = Template.bind({})

Default.args = {
  color: 'white',
  title: 'Professional ',
  description: 'For users who want to do more.'
}

Default.decorators = [
  componentWrapperDecorator(
    (story) =>
      `<div style="border-radius: 1.6rem; min-width:30rem; height: auto; padding: 1rem  3rem; background: #040505;">${story}</div>`
  )
]

export const Recommended: Story<CardHeaderComponent> = (args) => ({
  props: args
})

Recommended.decorators = [
  componentWrapperDecorator(
    (story) =>
      `<div style="border-radius: 1.6rem; min-width: 30rem; height: auto; padding:1rem 3em; background: #011ff9;">${story}</div>`
  )
]

Recommended.args = {
  recommended: true,
  color: 'white',
  title: 'Team ',
  description: 'Your entire team in one plase'
}
