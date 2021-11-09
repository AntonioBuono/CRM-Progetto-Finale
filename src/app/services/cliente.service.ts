import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Content } from '../content';
import { ICliente } from '../Interfaccia/icliente';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  urlAPI = environment.urlAPI + 'api/clienti?size=100&sort=id,ASC';
  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM4NzQzNCwiZXhwIjoxNjM3MjUxNDM0fQ.kA_vFKsUjBx0R6cuXlpVFr4Acsu5xciEr3CnAf19GLr9Rer_k6NmKOuvzk6BLZ_BnPY5-XG2Ztp0LbVcl8lMNw';
  tenantID = 'fe_0421';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getAllClienti() {
    return this.http.get<Content>(this.urlAPI);
  }
  getClienti(id:number){
    return this.http.get<ICliente>(environment.urlAPI+'api/clienti/' + id);
  }
  removeClienti(clienti:ICliente){
    return this.http.delete(this.urlAPI + clienti.id);
  }
}
