import { Component, OnInit, ViewChild ,OnDestroy} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { user } from 'src/app/theme/shared/module/module';
import { UserService } from 'src/app/theme/shared/services/user.service';
import { EditComponent } from './edit/edit.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit ,OnDestroy{

  user: user[] = []
  isAlived = true
  constructor(
    private _user: UserService,
    public dialog: MatDialog,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.userlist()

  }

  userlist() {

    const userData$ = this._user.getAllUser()[0]

    userData$.pipe(takeWhile(()=>this.isAlived)).subscribe(data => {
      this.user = data
      // console.log(data)
    })
    // console.log(this.user)s

  }

  delete(id: any) {

    this._user.deleteUser(id)
  }
  edit(id:any) {
    this.dialog.open(EditComponent,{
      width:"256px",
      data:this.user.find(user =>{
        return user.id == id
      })
    })
  }

  view(id:any){
    this.router.navigate(['view',id])
    }

  ngOnDestroy(): void {
    this.isAlived = false
  }

  
}
