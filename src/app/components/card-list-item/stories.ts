import { Meta, Story } from '@storybook/angular'

import { CardListItemComponent } from './card-list-item.component'

export default {
  component: CardListItemComponent,
  title: 'Card/CardListItemComponent'
} as Meta

const Template: Story<CardListItemComponent> = (args) => ({
  props: args
})

export const Default = Template.bind({})

Default.args = {
  title: 'Unlimited Projects'
}

export const Uncative = Template.bind({})

Uncative.args = {
  title: 'User provisioning (SCIM)',
  active: false
}
