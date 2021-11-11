import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ICliente } from '../Interfaccia/icliente';
import { IComuni } from '../Interfaccia/icomuni';
import { IProvincie } from '../Interfaccia/iprovincie';
import { ClientiService } from '../services/cliente.service';
import { ComuniService } from '../services/comuni.service';
import { ProvincieService } from '../services/provincie.service';

@Component({
  selector: 'app-form-clienti',
  templateUrl: './form-clienti.component.html',
  styleUrls: ['./form-clienti.component.css']
})
export class FormClientiComponent implements OnInit {

  title!: string;
  comuni: IComuni []=[];
  provincie: IProvincie[]=[];


  editClienti!:  ICliente;
 
  
 

  constructor(
    private ClientiService:ClientiService, 
    private route: ActivatedRoute,
    private ComuniService:ComuniService,
    private ProvincieService:ProvincieService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id){
        this.title='Aggiungi';
        this.editClienti =  new Clienti();
      }
        else{
          this.title='Modifica';
        this.ClientiService.getClienti(element.id).subscribe(clienti => this.editClienti= clienti);
}
  });
  }
  getComuni(){
    this.ComuniService.getAllComuni().subscribe(comuni=> this.comuni = comuni);
  }
  getProvincie(){
    this.ProvincieService.getAllProvincie().subscribe(response=>  this.provincie = response);
  }

  saveClienti(){
    this.route.params.subscribe(element => {
      if (element.id){
    this.ClientiService.createClienti(this.editClienti).subscribe(response=>{
      this.router.navigate(['clienti/list'])
    })
      }
        else{
          this.ClientiService.updateClienti(this.editClienti).subscribe(_response=> {
            this.router.navigate(['clienti/list'])
    
    });
    }
  })
}
}

