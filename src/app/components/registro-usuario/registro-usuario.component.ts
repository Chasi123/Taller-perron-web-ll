import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {
  enviado = false;
  private http = inject(HttpClient);
  fb = inject(FormBuilder);

  registroFrom: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    fechaNacimiento: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  registrar() {
    if (this.registroFrom.valid) {
      this.enviado = true;

      this.http.post(
        'https://app-fire-bf9d6-default-rtdb.firebaseio.com/usuario.json',
        this.registroFrom.value
      ).subscribe({
        next: () => {
          alert('Registro exitoso ');
          this.registroFrom.reset();
        },
        error: (err) => {
          console.error('Error al registrar el usuario', err);
          alert('Ocurrió un error al registrar');
        }
      });

    } else {
      this.registroFrom.markAllAsTouched();
    }
  }

  camposSinLlenar = () => {
  return !this.enviado && Object.values(this.registroFrom.value).some(
    valor => String(valor).trim() !== ''
  );
};
}
