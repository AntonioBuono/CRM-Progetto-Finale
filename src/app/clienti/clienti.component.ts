import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {
[x: string]: any;
ngOnInit(): void {
}

getAllClienti(){
  return this.http.get('https://epicode.online/epicodebeservice_v2/api/clienti?page=0&size=20&sort=id,ASC')
}
}
