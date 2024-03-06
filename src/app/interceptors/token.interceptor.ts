import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class tokenInterceptor implements HttpInterceptor {

    constructor(private router : Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        

      const mytoken = sessionStorage.getItem('loginID');
      console.log(mytoken);

      request = request.clone({
          setHeaders: {
              Authorization: `Bearer ${mytoken}`
          }
      });
        return next.handle(request).pipe(
          catchError((err:any)=>{
              if(err instanceof HttpErrorResponse){
                  if(err.status === 403){
                    alert("sorry you dont have authorazation");
                    
                    this.router.navigate(["login"]);

                  }
              }
              return throwError(()=> new Error(err.status));
          })
        );
    }
}