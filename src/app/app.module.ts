import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ButtonComponent } from './components/button/button.component'
import { CardHeaderComponent } from './components/card-header/card-header.component'
import { CardListItemComponent } from './components/card-list-item/card-list-item.component'
import { CardComponent } from './components/card/card.component'
import { FormatPricePipe } from './utils/pipe/format-price/format-price.pipe';
import { HomeComponent } from './pages/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardHeaderComponent,
    CardListItemComponent,
    CardComponent,
    FormatPricePipe,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
