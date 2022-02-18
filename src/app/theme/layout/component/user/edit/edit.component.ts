import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { timeStamp } from 'console';
import { map } from 'rxjs/operators';
import { userAdd } from 'src/app/state/acation/user-action';
import { user } from 'src/app/theme/shared/module/module';
import { UserService } from 'src/app/theme/shared/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editUser!:FormGroup

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: user,
    private fb:FormBuilder,
    private _user:UserService
  ) {
    // console.log(data)
   }

  ngOnInit(): void {
    this.editUser = this.fb.group({
      id:[this.data ? this.data.id :this.makeId()],
      name:[this.data ? this.data.name :'',Validators.required],
      email:[this.data? this.data.email :'',Validators.required],
    })
  }
  
  makeId(){
    let lenght = 0
    const user$ = this._user.getAllUser()[0]
     user$.pipe(map(a => a.length+1)).subscribe(data => lenght = data)
     return lenght
  }
  
  updateUser(){
    const user  = {...this.data,...this.editUser.value}
    // console.log(user)
    // console.log(this.editUser.value)
    this.dialogRef.close()
    this._user.updateUser(user)
  }

  add(){
    this._user.addUser(this.editUser.value)
    this.dialogRef.close()
   
  }
  editOrUpadate(){
    if(this.data){
      this.updateUser()
    }
    else{
      this.add()
    }
  }
}
