import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map, catchError, finalize } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { LoaderService } from "./loader.service";


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private loader: LoaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            map(event => { return event }),
            catchError(error => { return Observable.throw(error) }),
            finalize(() => { this.loader.setHttpStatus(false) })
        );
    }
}
