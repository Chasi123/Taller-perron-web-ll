import { Component } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { RouterLink } from '@angular/router';
import { ProductoComponent } from "../producto/producto.component";


@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [RouterLink, ProductoComponent],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent {

  constructor(private servicioCliente: ClientesService){}
  
    clientes: any[]=[];

  
    ngOnInit(){
      this.servicioCliente.getCliente().subscribe(data=>{
        this.clientes=Object.keys(data).map(key =>({
          id: key, ...data[key]
        }));
      })
    }

}

