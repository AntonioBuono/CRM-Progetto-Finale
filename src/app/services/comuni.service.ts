import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComuni } from '../Interfaccia/icomuni';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {
  getAllProvincie() {
    throw new Error('Method not implemented.');
  }

  urlAPI = environment.urlAPI + 'api/comuni?page=0&size=20&sort=id,ASC';

  constructor(private http: HttpClient) { }

  getAllComuni(){
    return this.http.get<IComuni[]>(this.urlAPI);
  }
  getCOmuni(id:number){
    return this.http.get(environment.urlAPI+'api/comuni/' + id);
  }
}
