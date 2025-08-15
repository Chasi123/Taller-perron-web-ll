import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  constructor(private servicioCliente: ClientesService){}

    nombre: string='';
    apellido:string='';
    direccion:string='';
    email:string='';

  guardarCliente(formularios: any){
    this.servicioCliente.postCliente(formularios.value).subscribe(()=>{
      window.location.reload();
    })
  }
}