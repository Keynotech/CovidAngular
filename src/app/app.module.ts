import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { CovidComponent } from './covid/covid.component'; //component

import {ReactiveFormsModule} from '@angular/forms'; //obsluga formularzy

import {HttpClientModule} from '@angular/common/http'; // do open-covid.service.ts

import {OpenCovidService} from './open-covid.service';//komunikacja z api
@NgModule({
 declarations: [
 AppComponent,
 CovidComponent,
 ],
 imports: [
 BrowserModule,
 ReactiveFormsModule,
 HttpClientModule,
 ],
 providers: [
 OpenCovidService,
 ],
 bootstrap: [AppComponent]
})
export class AppModule { }