import { Meta, Story } from '@storybook/angular'

import { ButtonComponent } from './button.component'

export default {
  component: ButtonComponent,
  title: 'Library/Button',
  argTypes: {
    color: {
      options: ['blue', 'white', 'black'],
      control: { type: 'radio' }
    }
  }
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonComponent> = (args) => ({
  props: args,
  component: ButtonComponent
})

export const Default = Template.bind({})
Default.args = {
  title: 'Try for Free',
  color: 'blue'
}

export const White = Template.bind({})
White.args = {
  title: 'Try for Free',
  color: 'white'
}

export const Black = Template.bind({})
Black.args = {
  title: 'Try for Free',
  color: 'black'
}
