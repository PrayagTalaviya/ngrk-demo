import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { EditComponent } from './theme/layout/component/user/edit/edit.component';
import { UserService } from './theme/shared/services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NGRX';

  constructor(
    private spinner: NgxSpinnerService,
    private _user:UserService,
    private matDilog:MatDialog
  ) {
    
  }

  reload(){
    this.spinner.show();
    window.onload
    this._user.getAllUser(true)[0].subscribe(console.log)
    setTimeout(() => {
      /** spinner ends after 1 seconds */
      
      this.spinner.hide();
      
    }, 1000);
  }

  add(){
    this.matDilog.open(EditComponent,{
      width:'250px'
    })
  }
}
