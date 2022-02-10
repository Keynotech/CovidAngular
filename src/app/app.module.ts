import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CovidComponent } from './covid/covid.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'; //obsluga formularzy
import {OpenCovidService} from './open-covid.service';
import { ShopComponent } from './shop/shop.component';
import { AppRoutingModule } from './app-routing.module';
import { CovidChildComponent } from './covid-child/covid-child.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';//komunikacja z api
@NgModule({
 declarations: [
 AppComponent,
 CovidComponent,
 ShopComponent,
 CovidChildComponent,
 NavComponent,
 FooterComponent,
 ],
 imports: [
 BrowserModule,
 ReactiveFormsModule,
 HttpClientModule,
 AppRoutingModule,
 ],
 providers: [
 OpenCovidService,
 ],
 bootstrap: [AppComponent]
})
export class AppModule { }
