import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalPageComponent } from './local-page/local-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LocalPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports : [
    LocalPageComponent,
  ]
})
export class PagesModule { }
