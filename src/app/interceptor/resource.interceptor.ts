import { TokenService } from '../services/token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ResourceInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let intReq = request;
    const token = this.tokenService.getAccessToken();
    if(token != null && (request.url.includes('resource') || request.url.includes('booking'))) {
      // request.headers.set('ngrok-skip-browser-warning', 'true');
      intReq = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)
                    .set('ngrok-skip-browser-warning', 'true')});
    }
    return next.handle(intReq).pipe( tap(() => {},
    (err: any) => {
    if (err instanceof HttpErrorResponse) {
      if (err.status !== 401) {
       return;
      }
      alert("Your session expired ! Please login again")
      localStorage.removeItem("isLoggedIn")
      window.location.href=environment.logout_url;
    }
  }));
  }
}