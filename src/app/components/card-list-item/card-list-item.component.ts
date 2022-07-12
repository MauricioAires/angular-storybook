import { Component, Input, OnInit } from '@angular/core'

export type CardListItemProps = {
  title: string
  active: boolean
}

@Component({
  selector: 'app-card-list-item',
  templateUrl: './card-list-item.component.html',
  styleUrls: ['./card-list-item.component.css']
})
export class CardListItemComponent implements OnInit {
  @Input() public title!: string
  @Input() public active = true

  constructor() {}

  ngOnInit(): void {}
}
