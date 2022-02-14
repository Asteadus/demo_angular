import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { DemoComponent } from './demo.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    DemoBindingComponent,
    DemoComponent,
    DemoPipeComponent,
    NavComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    SharedModule

  ]
})
export class DemoModule { }
