import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProvincie } from '../Interfaccia/iprovincie';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProvincieService {

  urlAPI = environment.urlAPI + 'api/province?page=0&size=20&sort=id,ASC';

  constructor(private http:HttpClient) { }

  getAllProvincie(){
    return this.http.get<IProvincie[]>(this.urlAPI);
  }
  getProvincie(id:number){
    return this.http.get(environment.urlAPI+'api/province/' + id);
  }
}
