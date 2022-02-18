import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { ViewComponent } from './user/view/view.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'user',
    pathMatch:'full'
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'post',
    component:PostComponent
  },
  {
    path:'view/:id',
    component:ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
