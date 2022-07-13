import { Component, Input, OnInit } from '@angular/core'

export type ButtonColor = 'blue' | 'white' | 'black'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() public title!: string
  @Input() public color: ButtonColor = 'blue'

  constructor() {}

  ngOnInit(): void {}
}
