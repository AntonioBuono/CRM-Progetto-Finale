import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyHeaderComponent } from './my-header/my-header.component';
import { TabellaClientiComponent } from './tabella-clienti/tabella-clienti.component';
import { DettaglioClientiComponent } from './dettaglio-clienti/dettaglio-clienti.component';
import { FormClientiComponent } from './form-clienti/form-clienti.component';
import { LoginComponent } from './login/login.component';
import { ClientiComponent } from './clienti/clienti.component';
import { MyHttpInterceptorInterceptor } from './my-http-interceptor.interceptor';
import { FormsModule } from '@angular/forms';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { FatturaComponent } from './fattura/fattura.component';



@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    TabellaClientiComponent,
    DettaglioClientiComponent,
    FormClientiComponent,
    LoginComponent,
    ClientiComponent,
    MyFooterComponent,
    FatturaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptorInterceptor,
  multi:true
}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
