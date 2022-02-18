import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from './materil/materil.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Authinterceptor } from './intercepter/auth.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: "toast-bottom-left",
    }),
    HttpClientModule,
  
  ],
  providers: [    
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: Authinterceptor, 
      multi: true 
    }
  ],
 
})
export class SharedModule { }
