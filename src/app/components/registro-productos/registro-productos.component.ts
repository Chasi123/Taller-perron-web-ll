import { Component } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-registro-productos',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './registro-productos.component.html',
  styleUrl: './registro-productos.component.css'
})
export class RegistroProductosComponent {

  constructor(private productoServicios: ProductosService){}

  nombre:String = '';
  precio:number = 0;
  stock:number = 0;

  guardar(formulario: any){
    this.productoServicios.postProducto(formulario.value).subscribe(()=>{
      window.location.reload();
    })
  }

}

