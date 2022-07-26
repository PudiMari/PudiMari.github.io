import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Tecnico} from "../models/tecnico";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class TecnicoService {

    baseUrl: String = environment.baseUrl;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Tecnico[]> {
        const url = this.baseUrl + "/tecnicos";
        return this.http.get<Tecnico[]>(url);
    }
}
