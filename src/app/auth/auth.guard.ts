import { Injectable } from '@angular/core';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';

import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(protected router: Router, protected authService: AuthService) { }
    isUserValid: boolean;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        this.authService.user$.subscribe(r => {
            if (state.url !== '/login' && r === null) {
                this.router.navigate(['/login']);
                this.isUserValid = false;
            }
            
                this.isUserValid = true;
        });
        return this.isUserValid;
    }
}