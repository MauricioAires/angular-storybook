import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {
  transform(value: number): string {
    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD'
    }).format(value)
  }
}
