import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clienti } from '../classes/clienti';
import { Content } from '../content';
import { ICliente } from '../Interfaccia/icliente';
import { Comune } from '../Interfaccia/icomuni';
import { Provincia } from '../Interfaccia/iprovincie';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  urlAPI = environment.urlAPI + 'api/clienti?page=0&size=20&sort=id,DESC';
  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM4NzQzNCwiZXhwIjoxNjM3MjUxNDM0fQ.kA_vFKsUjBx0R6cuXlpVFr4Acsu5xciEr3CnAf19GLr9Rer_k6NmKOuvzk6BLZ_BnPY5-XG2Ztp0LbVcl8lMNw';
  tenantID = 'fe_0421';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getAllClienti() {
    return this.http.get<Content>(this.urlAPI,{headers: this.headers});
  }
  getClienti(id:number){
    return this.http.get<ICliente>(environment.urlAPI+'api/clienti/' + id,{headers: this.headers});
  }
  getTipiCliente() {
    return this.http.get<string[]>(environment.urlAPI + 'api/clienti/tipicliente', {headers: this.headers})
  }
  getComune(){
    return this.http.get<Comune>(environment.urlAPI + 'api/comuni?page=0&size=20&sort=id,ASC' , {headers: this.headers})
  }
  getAllProvince() {
    return this.http.get<Provincia>(environment.urlAPI + 'api/province?page=0&size=20&sort=id,ASC', {headers: this.headers})
  }
  updateClienti(clienti:ICliente){
    return this.http.put<ICliente>(environment.urlAPI+ 'api/clienti/'+ clienti.id, clienti,{headers: this.headers});
  }
  createClienti(clienti:ICliente){
    return this.http.post<ICliente>(environment.urlAPI+ 'api/clienti/' , clienti,{headers: this.headers});
  }
  // createClienti(clienti:ICliente){
  //   return this.http.post<ICliente>(environment.urlAPI+ 'api/clienti/',clienti,{headers: this.headers});
  // }
  removeClienti(clienti:ICliente){
  return this.http.delete(environment.urlAPI + 'api/clienti/' + clienti.id,{headers: this.headers});
  }
  
}
