import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ICliente } from '../Interfaccia/icliente';
import { comune, Comune } from '../Interfaccia/icomuni';
import { provincia, Provincia } from '../Interfaccia/iprovincie';
import { ClientiService } from '../services/cliente.service';
import { ComuniService } from '../services/comuni.service';


@Component({
  selector: 'app-form-clienti',
  templateUrl: './form-clienti.component.html',
  styleUrls: ['./form-clienti.component.css']
})
export class FormClientiComponent implements OnInit {

  title: string="";
  comune: comune[]=[];
  province: provincia[]=[];
  tipicliente: string[] = [];


  editClienti:  ICliente={
    ragioneSociale: "",
    partitaIva: "",
    tipoCliente: "",
    email: "",
    pec: "",
    telefono: "",
    nomeContatto: "",
    cognomeContatto: "",
    telefonoContatto: "",
    emailContatto: "",
    indirizzoSedeOperativa: {
      via: "",
        civico: "",
        cap: "",
        localita: "",
        comune: {
            id: 0,
            nome: "",
          provincia: {
                id: 0,
                nome: "",
                sigla: ""
            }
        }
    },
    indirizzoSedeLegale: {
        via: "",
        civico: "",
        cap: "",
        localita: "",
        comune: {
            id: 0,
            nome: "",
            provincia: {
                id: 0,
                nome: "",
                sigla: ""
            }
        }
    },
    dataInserimento: "2019-06-01T08:11:01.911+00:00",
    dataUltimoContatto: "2021-03-24T21:32:06.375+00:00"
}
 
  
 

  constructor(
    private clientiService:ClientiService, 
    private route: ActivatedRoute,
    private ComuniService:ComuniService,
    private router: Router) { }

  ngOnInit(): void {
    this.clientiService.getComune().subscribe(res => this.comune = res.content);
    this.clientiService.getAllProvince().subscribe(res => this.province = res.content);
this.clientiService.getTipiCliente().subscribe(res => this.tipicliente = res); 
    this.route.params.subscribe(element => {
      if(!element.id) {
        this.title = 'Nuovo';
        this.editClienti = new Clienti(); 
      }
        else{
          this.title='Modifica';
        this.clientiService.getClienti(element.id).subscribe(clienti => this.editClienti= clienti);
}
  });
  }
  // getComuni(){
  //   this.ComuniService.getAllComuni().subscribe(comuni=> this.comune = comuni);
  // }
  // getProvincie(){
  //   this.ProvincieService.getAllProvincie().subscribe(response=>  this.provincie = response);
  // }

  saveClienti(){
    this.route.params.subscribe(element => {
      if(!element.id) {
        this.clientiService.createClienti(this.editClienti).subscribe(response=> console.log(response));
          this.router.navigate(['clienti/list'])
        }
      else{
          this.clientiService.updateClienti(this.editClienti).subscribe(response=> {
            this.router.navigate(['clienti/list'])
    
    });
    }
    })
  }
}
