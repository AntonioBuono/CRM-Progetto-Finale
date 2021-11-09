import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICliente } from '../Interfaccia/icliente';
import { ClientiService } from '../services/cliente.service';

@Component({
  selector: 'app-form-clienti',
  templateUrl: './form-clienti.component.html',
  styleUrls: ['./form-clienti.component.css']
})
export class FormClientiComponent implements OnInit {

  editClienti!:  ICliente ;

  constructor(private ClientiService:ClientiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id){
        this.ClientiService.getClienti(element.id).subscribe(response => this.editClienti= response);
}
  })
  }
}
