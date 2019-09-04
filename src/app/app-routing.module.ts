import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovementsPieComponent} from './movements-pie/movements-pie.component';


const routes: Routes = [
  { path: '', component: MovementsPieComponent },
  { path: 'chart', component: MovementsPieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
