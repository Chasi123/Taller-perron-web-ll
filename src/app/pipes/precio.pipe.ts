import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio',
  standalone: true
})
export class PrecioPipe implements PipeTransform {
  transform(value: number, moneda: string = 'USD'): string {
    if (isNaN(value)) return '';
    return new Intl.NumberFormat('es-EC', {
      style: 'currency',
      currency: moneda
    }).format(value);
  }
}