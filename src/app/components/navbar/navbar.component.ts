import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuutenticacionService } from '../../servicios/auutenticacion.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public authServicio: AuutenticacionService, private router: Router) { }
  logout=()=> {
    this.authServicio.logout();
    this.router.navigate(['/login']);
  }
}
