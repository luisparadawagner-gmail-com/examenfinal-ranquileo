import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/Clase/Cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentConsultarService } from 'src/app/Servicio/component-consultar-service';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent implements OnInit {

  constructor(private componentConsultarService : ComponentConsultarService,
    private router: Router,
    private rutaA: ActivatedRoute) { }

    displayedColumns: string[] = ['nombre', 'apellido', 'telefono', 'direccion', 'fechaDeNacimiento', 'editar','asociar','listar' ];

    dataSource: Cliente [] = [];

    clienteNuevo: any;

  ngOnInit(): void {
    this.getCliente();

  }
  getCliente() {
    this.componentConsultarService.getCliente().subscribe((clientes) => {
      this.dataSource = clientes;
      this.agregarFila();

    });
  }
  agregarFila() {
    this.clienteNuevo = this.rutaA.snapshot.params;
    this.dataSource.push(this.clienteNuevo);
  }
  editar(element){
    this.router.navigate(['/formulario-clientes-component', element])
  }

  asociar(element){
    this.router.navigate(['/formulario-rutina-component', element])
  }
  listar(element){
    this.router.navigate(['/formulario-rutina-component', element])
  }
}
