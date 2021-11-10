import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from '../Interfaccia/icliente';
import { ClientiService } from '../services/cliente.service';

@Component({
  selector: 'app-form-clienti',
  templateUrl: './form-clienti.component.html',
  styleUrls: ['./form-clienti.component.css']
})
export class FormClientiComponent implements OnInit {

  editClienti!:  ICliente ;
  clienti!: Content;

  constructor(
    private ClientiService:ClientiService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id){
        this.ClientiService.getClienti(element.id).subscribe(response => this.editClienti= response);
}
  })
  }
  saveClienti(){
    this.ClientiService.updateClienti(this.editClienti).subscribe(response=> {
      this.router.navigate(['clienti/list'])
    });
    }
  }