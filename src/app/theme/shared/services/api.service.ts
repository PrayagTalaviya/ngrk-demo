import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { post, user } from '../module/module';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpServies:HttpService
  ) {
 
   }

  getuser() : Observable<user[]>{
    return this.httpServies.get('/users').pipe(
      map(data => data as user[])
    )
  }
  getpost() : Observable<post[]>{
    const data:post[]=[{
      id:1,
      title:'post 1',
      comments:[
        {id:1,
        description:"comment 1"},
        {id:2,
          description:"comment 2"}
      ]
    },
    {
      id:2,
      title:'post 2',
      comments:[
        {id:1,
        description:"comment 2"},
        {id:2,
          description:"comment 2"}
      ]
    },
  ]
  return new Observable(o => o.next(data))
  }

  getOneUser(id:any){
    // console.log(this.httpServies.get(`/users/${id}`))
    return this.httpServies.get(`/users/${id}`)
  }
}
