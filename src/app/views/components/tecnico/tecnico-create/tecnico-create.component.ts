import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TecnicoService} from "../../../../services/tecnico.service";
import {Tecnico} from "../../../../models/tecnico";

@Component({
    selector: 'app-tecnico-create',
    templateUrl: './tecnico-create.component.html',
    styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

    tecnico: Tecnico = {
        id: '',
        nome: 'Mariana',
        cpf: '856.768.050-64',
        telefone: '(00) 90000-0000'
    }

    constructor(
        private router: Router,
        private service: TecnicoService) {
    }

    ngOnInit(): void {
    }

    cancel(): void {
        this.router.navigate(['tecnicos'])
    }

    create(): void {
        this.service.create(this.tecnico).subscribe((reposta) => {
            this.router.navigate(['tecnicos'])
            this.service.message('Técnico cadastrado com sucesso!')
        }, err => {
            console.log(err)
            if (err.error.error.match('já cadastrado')) {
                this.service.message(err.error.error)
            }
        })
    }
}
