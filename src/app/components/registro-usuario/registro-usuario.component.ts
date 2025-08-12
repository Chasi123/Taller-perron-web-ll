import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {
enviado:boolean=false;

fb= inject(FormBuilder);
  registroFrom:FormGroup=this.fb.group({
    nombre:['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    fechaNacimiento:['',Validators.required],
    password:['',[Validators.required, Validators.minLength(6)]],
  })
  
  registrar(){
    if(this.registroFrom.valid){
      this.enviado=true;
      console.log('Registro exitoso:', this.registroFrom.value);
      alert('Registro exitoso');
  }else{
    this.registroFrom.markAllAsTouched();
  }
}

camposSinLlenar=()=>{
  return !this.enviado && Object.values(this.registroFrom).some
  (valor => valor.trim?.()!=='');

}
}