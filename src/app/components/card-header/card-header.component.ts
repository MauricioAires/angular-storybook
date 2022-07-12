import { Component, OnInit, Input } from '@angular/core'

export type HeaderColor = 'white' | 'blue' | 'red'

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css']
})
export class CardHeaderComponent implements OnInit {
  @Input() public color!: HeaderColor
  @Input() public title!: string
  @Input() public description!: string
  @Input() public recommended = false

  constructor() {}

  ngOnInit(): void {}
}
