import { CovidChildComponent } from './covid-child/covid-child.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import{ShopComponent} from './shop/shop.component';
import { CovidComponent } from './covid/covid.component';


const routes: Routes =[
  {path:'covid', component: CovidChildComponent},
  {path:'shop', component: ShopComponent},
  { path: '', redirectTo: '/covid', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
export class AppRoutingModule { }
