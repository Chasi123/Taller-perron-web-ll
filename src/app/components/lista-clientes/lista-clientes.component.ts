import { Component } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [RouterLink],
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

    eliminar(id:string):void{
      this.servicioCliente.eliminarCliente(id).subscribe(data=>{
        this.clientes=this.clientes.filter(cliente => cliente.id != id)
    },error =>{
        console.log("Error al eliminar el cliente", error);
    });
  }
}

