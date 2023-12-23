// import { Injectable } from '@angular/core';
// import {
//   HttpEvent,
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
//   HttpResponse,
// } from '@angular/common/http';
// import { Observable, tap } from 'rxjs';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor() {}

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     console.log('Outgoing HTTP request', request);
//     return next.handle(request).pipe(
//       tap((event: HttpEvent<any>) => {
//         console.log('Incoming HTTP response', event);
//       })
//     );
//   }
//   // intercept(
//   //   req: HttpRequest<any>,
//   //   next: HttpHandler
//   // ): Observable<HttpEvent<any>> {
//   //   const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpheWRlZXAgUGF0aWwiLCJpYXQiOjE1MTYyMzkwMjJ9.yt3EOXf60R62Mef2oFpbFh2ihkP5qZ4fM8bjVnF8YhA";//his.authService.getToken();

//   //   if (authToken) {
//   //     // Clone the request and attach the token
//   //     const authReq = req.clone({
//   //       setHeaders: {
//   //         Authorization: `Bearer ${authToken}`
//   //       }
//   //     });

//   //     return next.handle(authReq);
//   //   }

//   //   // If there is no token, pass the original request
//   //   return next.handle(req);
//   // }
// }