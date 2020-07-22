import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearFormularioclienteComponent } from './crear-formulariocliente/crear-formulariocliente.component';
import { CrearFormulariorutinaComponent } from './crear-formulariorutina/crear-formulariorutina.component';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';

import { ComponentConsultarService } from './Servicio/component-consultar-service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [ComponentConsultarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
