import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class HomeGuard implements CanActivate {

  constructor(private service: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
      let canAuth = this.service.getAuth()

      if(!canAuth){
        this.router.navigate(['/register'])
        return true
      }
      return true





  }
  
}
