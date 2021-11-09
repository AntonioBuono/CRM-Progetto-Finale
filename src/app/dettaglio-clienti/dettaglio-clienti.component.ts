import { Content } from'../content';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientiService } from '../services/cliente.service';
import { ICliente } from '../Interfaccia/icliente';
import { isObjectLiteralElementLike } from 'typescript';
import { parseMessage } from '@angular/localize/src/utils';
import { IContent } from '../icontent';
import { Cliente } from '../Classes/cliente';

@Component({
  selector: 'app-dettaglio-clienti',
  templateUrl: './dettaglio-clienti.component.html',
  styleUrls: ['./dettaglio-clienti.component.css']
})
export class DettaglioClientiComponent implements OnInit {

  detailClienti!:  ICliente ;
   

  constructor(private ClientiService:ClientiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id){
        this.ClientiService.getClienti(element.id).subscribe(response => this.detailClienti= response);
}
    })
  }
}

