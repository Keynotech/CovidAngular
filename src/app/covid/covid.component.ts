import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OpenCovidService } from '../open-covid.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  public covidSearchForm: FormGroup;
  public covidData: any;
  public countryData: any;
  constructor(
    private formBuilder: FormBuilder,
    private openCovidService: OpenCovidService,
    private router:Router
  )
  {
    this.covidSearchForm = this.formBuilder.group({
      country: ['', Validators.required],
      date: ['', Validators.required]
    });
  }
  checkCovid(): void {
    if (this.covidSearchForm.valid) {
      this.openCovidService
        .getDefaultCovid(this.covidSearchForm.value.country,this.covidSearchForm.value.date)
        .subscribe((data :any) => this.covidData = data)
        console.log(this.covidData)
      this.openCovidService
        .getCountryInformation(this.covidSearchForm.value.country)
        .subscribe((data :any) => this.countryData = data)
        console.log(this.countryData[0])

    }
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  


  ngOnInit(): void {
  }
}

