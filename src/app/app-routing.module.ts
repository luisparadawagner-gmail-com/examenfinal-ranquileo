import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CrearFormularioclienteComponent} from './crear-formulariocliente/crear-formulariocliente.component';
import {TablaClientesComponent} from './tabla-clientes/tabla-clientes.component';
import {CrearFormulariorutinaComponent} from './crear-formulariorutina/crear-formulariorutina.component';

const routes: Routes = [

  {path: 'formulario-rutina-component', component: CrearFormulariorutinaComponent},
  {path: 'formulario-clientes-component', component: CrearFormularioclienteComponent },
  {path: 'tabla-clientes-component', component: TablaClientesComponent},
  { path: '', redirectTo: 'tabla-clientes-component', pathMatch: 'full' },
  { path: '**', component: TablaClientesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
