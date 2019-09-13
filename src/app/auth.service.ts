import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }


  public isLoggedIn: boolean = true;

  public login() {
    this.isLoggedIn = true;
    console.log(this.isLoggedIn)
    
  }

  public logout() {
    this.isLoggedIn = false;
    console.log(this.isLoggedIn);
    this.router.navigateByUrl('/')
  }

}
