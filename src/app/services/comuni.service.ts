import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comune } from '../Interfaccia/icomuni';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {
  
  urlAPI = environment.urlAPI + 'api/comuni?page=0&size=20&sort=id,ASC';

  constructor(private http: HttpClient) { }

  getAllComuni(){
    return this.http.get<Comune[]>(this.urlAPI);
  }
}
