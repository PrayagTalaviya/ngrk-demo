import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { user } from 'src/app/theme/shared/module/module';
import { UserService } from 'src/app/theme/shared/services/user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  id:any
  userone:any=[]
  constructor(
    private route:ActivatedRoute,
    private _user:UserService
  ) {
   
  
   }

   fetchData(){
    this.route.params.pipe(
      map(data => data.id),
      switchMap((id)=> this._user.getUser(id)),
     filter(res => !!res)
    ).subscribe(data => this.userone = data)
  }
  ngOnInit(): void {
    this.fetchData()
   
  }

}
