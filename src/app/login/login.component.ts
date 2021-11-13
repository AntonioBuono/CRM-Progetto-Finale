import { RouteGuardService } from './../route-guard.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginEmail!: string;
  loginPassword!: string;

  constructor(private router: Router, private routeGuardService: RouteGuardService) { }

  ngOnInit(): void {
  }

  signin() {
    if(this.loginEmail === 'admin' && this.loginPassword === 'admin') {
      alert('Login ok');
      this.routeGuardService.setLogin();
      this.router.navigate(['clienti/list']);
    } else {
      alert('email/password errate!!!');
      this.loginEmail = '';
      this.loginPassword = '';
    }
  }

}

