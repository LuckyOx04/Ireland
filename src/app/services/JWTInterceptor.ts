import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Constants } from '../Constants';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private constants: Constants) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
        const isLoggedIn = this.authService.getAuth();
        const isApiUrl = request.url.startsWith(this.constants.API_ENDPOINT);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${this.authService.getToken()}` }
            });
        }

        return next.handle(request);
    }
}