import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/materil/materil.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EditComponent } from './user/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './user/view/view.component';


@NgModule({
  declarations: [
    UserComponent,
    PostComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    NgxSpinnerModule ,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentModule { }
