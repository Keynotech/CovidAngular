import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OpenCovidService } from '../open-covid.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  public covidSearchForm: FormGroup;
  public covidData: any;
  constructor(
    private formBuilder: FormBuilder,
    private openCovidService: OpenCovidService
  ) 
  {
    this.covidSearchForm = this.formBuilder.group({
      city: ['', Validators.required]
    });
  }
  checkCovid(): void {
    if (this.covidSearchForm.valid) {
      this.openCovidService
        .getCovid(this.covidSearchForm.value.city)
        .subscribe((data :any) => this.covidData = data)
      console.log(this.covidData);
    }
  }
  ngOnInit(): void {
  }
}

