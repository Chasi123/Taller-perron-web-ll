import { Component } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent {

  constructor(private servicioCliente: ClientesService,
    private router: Router, private ruta: ActivatedRoute
  ){}

  id:string="";
  cliente: any={nombre:'', apellido:'', direccion:'', email:''}

  ngOnInit():void{
    this.ruta.params.subscribe(params =>{
      this.id=params['id']
      this.servicioCliente.buscarCliente(this.id).subscribe(cliente =>{
        this.cliente=cliente;
      })
    })
  }

  editar(formulario:any):void{
    const clienteActualizado={...formulario.value, id:this.id};
    this.servicioCliente.editarCliente(this.id, clienteActualizado).subscribe(() =>{
      this.router.navigate(['/lista']);
  });
}
}
