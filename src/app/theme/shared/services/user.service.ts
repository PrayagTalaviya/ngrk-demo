import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { commentAdd, commentEdit, commentRemove, postListRequest, postListSuccess } from 'src/app/state/acation/post-action';
import { userAdd, userDelete, userEdit, userListRequest, userListSuccess } from 'src/app/state/acation/user-action';
import { getPost, getPostLoaded, getPostLoading, getUser, getUserId, getUserLoaded, getUserLoading, rootReducersState } from 'src/app/state/reducers';
import { comment, post, user } from '../module/module';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private api: ApiService,
    private store: Store<rootReducersState>
  ) { }

  getAllUser(fores = false): [Observable<user[]>, Observable<boolean>] {
    const loaded$ = this.store.select(getUserLoaded);
    const loading$ = this.store.select(getUserLoading);
    const users$ = this.store.select(getUser)

    combineLatest([loaded$, loading$]).pipe(take(1)).subscribe(data => {
      if ((!data[0] && !data[1]) || fores) {
        this.store.dispatch(new userListRequest())
        this.api.getuser().subscribe(data => {
          this.store.dispatch(new userListSuccess({ users: data }))
        })
      }
    })

    return [users$, loading$]
  };


  deleteUser(id: any) {
    this.store.dispatch(new userDelete({ id }))
  }

  updateUser(data: user) {
    this.store.dispatch(new userEdit({ data }))
  }

  addUser(data: user) {
    this.store.dispatch(new userAdd({ data }))
  }

  getUser(id: number, force = false) {
    const user$ = this.store.select(state => getUserId(state, id))

    user$.pipe(take(1)).subscribe(res => {
      // console.log(res)
      if (force || !res) {
        // console.log('if')
        return this.api.getOneUser(id).subscribe((data: any) => {
          this.store.dispatch(new userEdit({ data }))
        })
      }else {
        return res
      }
    })
    return user$
  }

  getAllPost(fores = false): [Observable<post[]>, Observable<boolean>] {
    const loaded$ = this.store.select(getPostLoaded);
    const loading$ = this.store.select(getPostLoading);
    const posts$ = this.store.select(getPost)

    combineLatest([loaded$, loading$]).pipe(take(1)).subscribe(data => {
      if ((!data[0] && !data[1]) || fores) {
        this.store.dispatch(new postListRequest())
        this.api.getpost().subscribe(data => {
          this.store.dispatch(new postListSuccess({ data }))
        })
      }
    })

    return [posts$, loading$]
  };

  addComment(data:comment,postId:number){
    this.store.dispatch(new commentAdd({data,postId}))
  }

  editComment(data:comment,postId:number){
    this.store.dispatch(new commentEdit({data,postId}))
  }

  deleteComment(id:number,postId:number){
    console.log(id,postId)
    this.store.dispatch(new commentRemove({id,postId}))
  }

}
