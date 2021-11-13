import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IFatture } from './Interfaccia/ifatture';


@Injectable({
  providedIn: 'root'
})
export class FattureService {


  urlAPI = environment.urlAPI + 'api/fatture?page=0&size=20&sort=id,DESC';
  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM4NzQzNCwiZXhwIjoxNjM3MjUxNDM0fQ.kA_vFKsUjBx0R6cuXlpVFr4Acsu5xciEr3CnAf19GLr9Rer_k6NmKOuvzk6BLZ_BnPY5-XG2Ztp0LbVcl8lMNw';
  tenantID = 'fe_0421';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getAllFatture() {
    return this.http.get<IFatture>(this.urlAPI,{headers: this.headers});
  }
  getFatture(id:number){
    return this.http.get<IFatture>(environment.urlAPI+'api/fatture/' + id,{headers: this.headers});
  }
}
