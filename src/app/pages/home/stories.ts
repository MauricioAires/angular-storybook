import { Meta, Story, moduleMetadata } from '@storybook/angular'

import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { ButtonComponent } from '../../components/button/button.component'
import { CardListItemComponent } from '../../components/card-list-item/card-list-item.component'
import { FormatPricePipe } from '../../components/../utils/pipe/format-price/format-price.pipe'
import { CardHeaderComponent } from '../../components/card-header/card-header.component'
import { CardComponent } from './../../components/card/card.component'

import mockHome from './mock'

export default {
  component: HomeComponent,
  title: 'Pages/Home',
  excludeStories: /.*Data$/,
  args: {
    items: mockHome
  },
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [
        ButtonComponent,
        CardHeaderComponent,
        FormatPricePipe,
        CardListItemComponent,
        CardComponent
      ],
      imports: [CommonModule]
    })
  ]
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<HomeComponent> = (args) => ({
  props: args,
  component: HomeComponent
})

export const Default = Template.bind({})
