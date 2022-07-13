import { Meta, Story, moduleMetadata } from '@storybook/angular'

import { CommonModule } from '@angular/common'
import { CardComponent } from './card.component'
import { ButtonComponent } from './../button/button.component'
import { CardListItemComponent } from './../card-list-item/card-list-item.component'
import { FormatPricePipe } from './../../utils/pipe/format-price/format-price.pipe'
import { CardHeaderComponent } from './../card-header/card-header.component'

import mockCardComponent from './mock'

export default {
  component: CardComponent,
  title: 'Card/Card',
  args: mockCardComponent,
  argTypes: {
    buttonColor: {
      options: ['blue', 'white', 'black'],
      control: { type: 'radio' }
    },
    iconColor: {
      options: ['white', 'blue', 'red'],
      control: { type: 'radio' }
    },
    subscriptionTime: {
      options: ['lifetime', 'year', 'custom'],
      control: { type: 'radio' }
    }
  },
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [
        ButtonComponent,
        CardHeaderComponent,
        FormatPricePipe,
        CardListItemComponent
      ],
      imports: [CommonModule]
    })
  ]
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<CardComponent> = (args) => ({
  props: args,
  component: CardComponent
})

export const Default = Template.bind({})

export const Recommended = Template.bind({})

Recommended.args = {
  recommended: true
}
