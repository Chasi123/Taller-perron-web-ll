import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormularioSuscriComponent } from './components/formulario-suscri/formulario-suscri.component';

export const routes: Routes = [
    {path:"", component : HomeComponent},
    {path:"productos", component : ProductosComponent},
    {path:"sobre-nosotros", component : NosotrosComponent},
    {path:"contacto", component : ContactoComponent},
    {path:"formulario", component : FormularioSuscriComponent},
    {path:"**", redirectTo: ""}
];
