import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearFormularioclienteComponent } from './crear-formulariocliente/crear-formulariocliente.component';
import { CrearFormulariorutinaComponent } from './crear-formulariorutina/crear-formulariorutina.component';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearFormularioclienteComponent,
    CrearFormulariorutinaComponent,
    TablaClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
