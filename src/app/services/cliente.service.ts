import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable} from "rxjs";
import {Cliente} from "../models/cliente";

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    baseUrl: String = environment.baseUrl;

    constructor(
        private http: HttpClient,
        private snack: MatSnackBar) {
    }

    findAll(): Observable<Cliente[]> {
        const url = this.baseUrl + "/clientes";
        return this.http.get<Cliente[]>(url);
    }
}