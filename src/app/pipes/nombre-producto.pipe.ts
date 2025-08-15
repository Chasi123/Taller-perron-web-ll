import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreProducto',
  standalone: true
})
export class NombreProductoPipe implements PipeTransform {
  transform(value: string, maxLength: number = 30): string {
    if (!value) return '';
    let tituloFormateado = value
      .toLowerCase()
      .split(' ')
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join(' ');
    return tituloFormateado.length > maxLength
      ? tituloFormateado.substring(0, maxLength) + '...'
      : tituloFormateado;
  }
}

