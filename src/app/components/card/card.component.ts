import { Component, OnInit, Input } from '@angular/core'

import { CardListItemProps } from 'app/components/card-list-item/card-list-item.component'
import { HeaderColor } from 'app/components/card-header/card-header.component'
import { ButtonColor } from 'app/components/button/button.component'
import { FormatPricePipe } from 'app/utils/pipe/format-price/format-price.pipe'

export type Subcription = 'lifetime' | 'year' | 'custom'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public title!: string
  @Input() public description!: string
  @Input() public recommended: boolean = false
  @Input() public items!: CardListItemProps[]
  @Input() public iconColor!: HeaderColor
  @Input() public price!: number | string
  @Input() public subscriptionTime!: Subcription
  @Input() public buttonLabel!: string
  @Input() public buttonColor!: ButtonColor

  private subsciptionTitle: Record<Subcription, string> = {
    custom: 'Reach out for a quote',
    year: '/year',
    lifetime: 'For a Lifetime'
  }

  public get formattedPrice() {
    return typeof this.price === 'string'
      ? this.price
      : new FormatPricePipe().transform(this.price)
  }
  public get subscription() {
    return this.subsciptionTitle[this.subscriptionTime]
  }

  constructor() {}

  ngOnInit(): void {}
}
