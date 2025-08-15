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

  ngOnInit(){
    this.id = this.ruta.snapshot.params['id'];
    this.servicioCliente.getCliente().subscribe(data => {
      this.cliente = data.find((c: any) => c.id === this.id);
    });
  }

  actualizarCliente(formularios: any){
  this.servicioCliente.actualizarCliente(this.id, formularios.value)
    .subscribe(() => {
      this.router.navigate(['/clientes']);
    });
}

}
