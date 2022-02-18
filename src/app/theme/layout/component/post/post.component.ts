import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { comment, post, user } from 'src/app/theme/shared/module/module';
import { UserService } from 'src/app/theme/shared/services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post:post[] = []
  comment!:FormGroup
  // user:user[]=[]
  commentDiscription = ''
  constructor(
    private _user:UserService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.userList()
    this.comment = this.fb.group({
      id:[this.makeId()],
      c : ['']
    })
  }
  makeId(){
 
  }
  userList(){
 
  this._user.getAllPost()[0].subscribe(data =>{
    this.post = data 
  })

  // console.log(this.post[0].comments[0].description);
  
  }

  add(id:number){
   const data:comment ={
     id:1,
     description:this.comment.value.c
     
   }
    this._user.addComment(data,id)
    this.comment.reset()
  
  }
  delete(c_id:number,id:number){
  
    this._user.deleteComment(id,c_id) 
    console.log('fr',c_id,id)
   }

}
