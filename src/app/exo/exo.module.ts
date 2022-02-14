import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNomComponent } from './input-nom/input-nom.component';
import { FormsModule } from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { ExoChronoComponent } from './exo-chrono/exo-chrono.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    InputNomComponent,
    ExoComponent,
    ExoChronoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class ExoModule { }
