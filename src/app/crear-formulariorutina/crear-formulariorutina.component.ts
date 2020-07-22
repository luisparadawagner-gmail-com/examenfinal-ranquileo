import { Component, OnInit } from '@angular/core';
import  { FormBuilder } from '@angular/forms';

import {Rutinas} from 'src/app/Clase/Rutinas';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-crear-formulariorutina',
  templateUrl: './crear-formulariorutina.component.html',
  styleUrls: ['./crear-formulariorutina.component.css']
})
export class CrearFormulariorutinaComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

    rutinas: Rutinas;
    registro: any;

    rutinaForm= this.fb.group({})




  ngOnInit(): void {
    this.registro = this.rutaActiva.snapshot.params;

    if(Object.keys(this.registro).length){
      this.rutinas= this.registro;
    }
    this.initForm(this.rutinas);
}
initForm(editarRutina: Rutinas) {
  this.rutinaForm = this.fb.group({
    peso: [editarRutina ? editarRutina.peso : ''],
    repeticiones: [editarRutina ? editarRutina.repeticiones : ''],
    rutina: [editarRutina ? editarRutina.rutina : ''],
    
  });
}

submit(){
  this.rutinaForm.value;
  this.rutinas = this.rutinaForm.value;
  this.router.navigate(['/tabla-clientes-component', this.rutinas]);   
}


}
