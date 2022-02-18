import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private toasters:ToastrService
  ) { }

  handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    console.log(err)
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      switch (err.status) {
        case 400:
          errorMessage = "Bad Request.";
          break;
        case 401:
          errorMessage = "You need to log in to do this action.";
          break;
        case 403:
          errorMessage = "You don't have permission to access the requested resource.";
          break;
        case 404:
          errorMessage = "The requested resource does not exist.";
          break;
        case 412:
          errorMessage = "Precondition Failed.";
          break;
        case 500:
          errorMessage = "Internal Server Error.";
          break;
        case 503:
          errorMessage = "The requested service is not available.";
          break;
        case 422:
          errorMessage = "Validation Error!";
          break;
        case 0:
          errorMessage = "conection check";
          break;
        default:
          errorMessage = "Something went wrong!";
      }
    }
    if (errorMessage) {
      this.toasters.error(errorMessage);
    }
  }

}
