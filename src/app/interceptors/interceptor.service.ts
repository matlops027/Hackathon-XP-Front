import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpBackend, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { URL_TOKEN, CLIENT_ID, CLIENT_SECRET } from 'src/app/utils/global-variables';

@Injectable()
export class Interceptor implements HttpInterceptor {
    private httpClient: HttpClient;

    constructor( handler: HttpBackend) { 
        this.httpClient = new HttpClient(handler);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        this.getToken().subscribe(
            data => {
              console.log(data)
            }, error => {
              console.log(error)
            }
          )
        
        // request = request.clone({
        //     setHeaders: {
        //       Authorization: 'Bearer ' + this.token
        //     }
        //   });
        
          return next.handle(request);
        
    }
    getToken() {
        const body = new HttpParams()
            .set('grant_type', 'client_credentials')
            .set('client_id', CLIENT_ID)
            .set('client_secret', CLIENT_SECRET);

        return this.httpClient.post<any>(
            URL_TOKEN, 
            body,
            {
                headers: new HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('User-Agent', 'PostmanRuntime/7.29.0')
            }
          );
    }
}
