import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioClientiComponent } from './dettaglio-clienti/dettaglio-clienti.component';
import { FormClientiComponent } from './form-clienti/form-clienti.component';
import { TabellaClientiComponent } from './tabella-clienti/tabella-clienti.component';

const routes: Routes = [
  {
    path: 'clienti/list', 
    component: TabellaClientiComponent,
  },
  {
    path: '',
    redirectTo: 'clienti/list'
  },
  {
    path: 'clienti/new', 
    component: FormClientiComponent,
  },
  { 
    path: 'clienti/:id/detail',
    component: DettaglioClientiComponent,
  },
  {
    path: 'clienti/:id/edit', 
    component: FormClientiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
