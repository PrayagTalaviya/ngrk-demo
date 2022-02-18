import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';
import { observable } from 'rxjs';
import { catchError, map} from "rxjs/operators";
import { user } from '../module/module';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  basiUrl = 'https://jsonplaceholder.typicode.com'

  constructor(
    private http:HttpClient,
    private util:UtilService,
    private tost:ToastrService
  ) { }

  get(url:string,params?:any){
    const data = {params}
    return this.http.get(this.basiUrl + url , data)
  }

  

}
