import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyHeaderComponent } from './my-header/my-header.component';
import { TabellaClientiComponent } from './tabella-clienti/tabella-clienti.component';
import { DettaglioClientiComponent } from './dettaglio-clienti/dettaglio-clienti.component';
import { FormClientiComponent } from './form-clienti/form-clienti.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    TabellaClientiComponent,
    DettaglioClientiComponent,
    FormClientiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
