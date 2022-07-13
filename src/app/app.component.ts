import { Component } from '@angular/core'

import mockHome from 'app/pages/home/mock'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items = mockHome
}
