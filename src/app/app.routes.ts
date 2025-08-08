import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:"", component : HomeComponent},
    {path:"productos", component : ProductosComponent},
    {path:"sobre-nosotros", component : NosotrosComponent},
    {path:"contacto", component : ContactoComponent},
    {path:"lista", component : ListaClientesComponent},
    {path:'clientes/:id', component:ActualizarComponent},
    {path:"login", component: LoginComponent},
    {path:"**", redirectTo: ""}
];
