import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FattureService } from '../fatture.service';
import { IFatture } from '../Interfaccia/ifatture';
import { IContent } from '../icontent';

@Component({
  selector: 'app-fattura',
  templateUrl: './fattura.component.html',
  styleUrls: ['./fattura.component.css']
})
export class FatturaComponent implements OnInit {

  detailFatture!: IFatture;

  constructor(private FattureService: FattureService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(element=>{
      if(!element.id){
        this.FattureService.getFatture(element.id).subscribe(response => this.detailFatture= response);
      }
    })
  }

}
