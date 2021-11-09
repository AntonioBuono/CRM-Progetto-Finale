import { Content } from '../content';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICliente } from '../Interfaccia/icliente';
import { ClientiService} from './../services/cliente.service';




@Component({
  selector: 'app-tabella-clienti',
  templateUrl: './tabella-clienti.component.html',
  styleUrls: ['./tabella-clienti.component.css']
})
export class TabellaClientiComponent implements OnInit {

clienti!: Content ;
item!:ICliente;

  constructor(private ClientiService: ClientiService, private router:Router) { }

  ngOnInit(): void {
    this.ClientiService.getAllClienti().subscribe(response =>  this.clienti =response)
    console.log(this.clienti)
  }
deleteCliente(item:ICliente){
this.ClientiService.removeClienti(item).subscribe(response=> {
this.ClientiService.getAllClienti().subscribe(response =>  this.clienti =response);
})
}
detailCliente(item:ICliente){
  this.router.navigate(['clienti', item.id , 'detail'])
}
selectCliente(item:ICliente){
  this.router.navigate(['clienti', item.id , 'edit'])
}
  
}
