import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementRoutingModule } from './element-routing.module';
import { ElemntsHomeComponent } from './elemnts-home/elemnts-home.component';
import { ElementHomeComponent } from './element-home/element-home.component';


@NgModule({
  declarations: [
    ElemntsHomeComponent,
    ElementHomeComponent
  ],
  imports: [
    CommonModule,
    ElementRoutingModule
  ]
})
export class ElementModule { }
