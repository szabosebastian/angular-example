import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastService } from "../services/toast.service";

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {

  constructor(
    private toastService: ToastService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return new Observable((observable) => {
      next.handle(request).subscribe(
        (res: HttpEvent<any>) => {
          observable.next(res);
        },
        (err: HttpErrorResponse) => {
          this.handleErrorResponse(err);
        });
    });
  }

  public handleErrorResponse(err: HttpErrorResponse) {
    let errorMessage: string;

    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error occured : ' + err.error.message;
    } else {
      switch (err.status) {
        case 400:
          errorMessage = `${err.status}: Bad Request`;
          break;
        case 500:
          errorMessage = `${err.status}: Internal server error`;
          break;
        default:
          errorMessage = "Something went wrong!";
      }
    }
    this.toastService.errorToast(errorMessage);
  }
}


export const errorHandlerInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HandleErrorInterceptor, multi: true },
];
