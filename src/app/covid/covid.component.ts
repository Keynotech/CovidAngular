import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { time } from 'console';
import { OpenCovidService } from '../open-covid.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  public covidSearchForm: FormGroup;
  public covidData: any;
  public covidDataTest: any;
  constructor(
    private formBuilder: FormBuilder,
    private openCovidService: OpenCovidService
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
        .getCovid(this.covidSearchForm.value.country,this.covidSearchForm.value.date)
        .subscribe((data :any) => this.covidData = data)
      if (this.covidData[0].provinces[0].confirmed == undefined){
        console.log("TEST")
        this.openCovidService
        .getDefaultCovid("pl")
        .subscribe((data :any) => this.covidDataTest = data)
      }
      console.log(this.covidDataTest)
    }
  }


  ngOnInit(): void {
  }
}

