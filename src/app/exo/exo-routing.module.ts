import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoChronoComponent } from './exo-chrono/exo-chrono.component';
import { ExoComponent } from './exo.component';
import { InputNomComponent } from './input-nom/input-nom.component';

const routes: Routes = [
    {path : "", component: ExoComponent, children:[
    { path:"binding", component:InputNomComponent},
    { path:"chrono", component:ExoChronoComponent},
    ]}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
