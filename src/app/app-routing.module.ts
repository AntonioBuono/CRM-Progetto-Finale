import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioClientiComponent } from './dettaglio-clienti/dettaglio-clienti.component';
import { FormClientiComponent } from './form-clienti/form-clienti.component';
import { TabellaClientiComponent } from './tabella-clienti/tabella-clienti.component';
import { FatturaComponent } from './fattura/fattura.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './route-guard.service';

const routes: Routes = [
  {
    path: 'clienti/list', 
    component: TabellaClientiComponent,
    canActivate:[RouteGuardService],
  },
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'login'
  },
  {
    path: 'clienti/new', 
    component: FormClientiComponent,
    canActivate:[RouteGuardService],
  },
  { 
    path: 'clienti/:id/detail',
    component: DettaglioClientiComponent,
    canActivate:[RouteGuardService],
  },
  { 
    path: 'fatture/:id/detail',
    component: FatturaComponent,
    canActivate:[RouteGuardService],
  },
  {
    path: 'clienti/:id/edit', 
    component: FormClientiComponent,
    canActivate:[RouteGuardService],
  },
  {
    path: 'login', 
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
