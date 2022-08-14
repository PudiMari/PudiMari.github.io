import { Component, OnInit } from '@angular/core';
import {TecnicoService} from "../../../../services/tecnico.service";
import {Tecnico} from "../../../../models/tecnico";
import {ClienteService} from "../../../../services/cliente.service";
import {Cliente} from "../../../../models/cliente";
import {OS} from "../../../../models/os";
import {OsService} from "../../../../services/os.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent implements OnInit {

  os: OS = {
    tecnico: '',
    cliente: '',
    observacoes: '',
    status: '',
    prioridade: ''
  }

  tecnicos: Tecnico[] = []
  clientes: Cliente[] = []

  constructor(
      private  tecnicoService: TecnicoService,
      private clienteService: ClienteService,
      private service: OsService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.listarTecnicos();
    this.listarCliente();
  }

  create(): void{
    this.service.create(this.os).subscribe(resposta =>{
      this.service.message("Ordem de Serviço criada com sucesso!");
      this.router.navigate(['os'])
    })
  }

  listarTecnicos(): void {
    this.tecnicoService.findAll().subscribe(resposta => {
      this.tecnicos = resposta;
    })
  }

  listarCliente(): void{
    this.clienteService.findAll().subscribe(resposta =>{
      this.clientes = resposta;
    })
  }

}
