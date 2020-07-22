import { Component, OnInit } from '@angular/core';

import  { FormBuilder } from '@angular/forms';

import {Cliente} from 'src/app/Clase/Cliente';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-formulariocliente',
  templateUrl: './crear-formulariocliente.component.html',
  styleUrls: ['./crear-formulariocliente.component.css']
})
export class CrearFormularioclienteComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

    cliente: Cliente;
    registro: any;

    clienteForm= this.fb.group({})

  ngOnInit(): void {
    this.registro = this.rutaActiva.snapshot.params;

    if(Object.keys(this.registro).length){
      this.cliente = this.registro;
    }
    this.initForm(this.cliente);

  }
  initForm(editarCliente: Cliente) {
    this.clienteForm = this.fb.group({
      nombre: [editarCliente ? editarCliente.nombre : ''],
      apellido: [editarCliente ? editarCliente.apellido : ''],
      telefono: [editarCliente ? editarCliente.telefono : ''],
      direccion: [editarCliente ? editarCliente.direccion : ''],
      fechaDeNacimiento: [editarCliente ? editarCliente.fechaDeNacimiento : ''],
    });
  }

  submit(){
    this.clienteForm.value;
    this.cliente = this.clienteForm.value;
    this.router.navigate(['/tabla-viajes-component', this.cliente]);   
  }



}
