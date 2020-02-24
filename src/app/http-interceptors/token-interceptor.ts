import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log("***************TokenInterceptor*****************");
//     const userToken = 'userToken';
//     const modifiedReq = req.clone({ 
//       headers: req.headers.set('Authorization', `Basic ${userToken}`),
//     });
//     return next.handle(modifiedReq);
//   }
constructor(private authenticationService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log("***********************************")
    if (this.authenticationService.isUserLoggedIn()) {
        const authReq = req.clone({
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${localStorage.getItem('userToken')}`
            })
        });
        return next.handle(authReq);
    } else {
        return next.handle(req);
    }
}
}