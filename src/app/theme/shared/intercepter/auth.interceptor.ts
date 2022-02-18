import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UtilService } from "../services/util.service";


@Injectable()
export class Authinterceptor implements HttpInterceptor{
    constructor(
        private error: UtilService,
    ) {
        
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return new Observable((observer) => {
            next.handle(req).subscribe(res => 
            {
                if (res instanceof HttpResponse) {
                  observer.next(res);
                }
            
              },
              (err: HttpErrorResponse) => {
               this.error.handleError(err)
              }
              
            );
          });
    }

}