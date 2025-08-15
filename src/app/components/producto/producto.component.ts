import { Component } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { PrecioPipe } from '../../pipes/precio.pipe';
import { NombreProductoPipe } from '../../pipes/nombre-producto.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RouterLink, PrecioPipe, NombreProductoPipe, RouterLinkActive],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  constructor(private productoServicios: ProductosService) { }

  productos: any[] = []
  ngOnInit() {
    this.productoServicios.getProductos().subscribe(data => {
      this.productos = Object.keys(data).map(key => ({
        id: key, ...data[key]
      }))
    })

  }
}
