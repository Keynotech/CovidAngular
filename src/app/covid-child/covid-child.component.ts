import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-covid-child',
  templateUrl: './covid-child.component.html',
  styleUrls: ['./covid-child.component.css']
})
export class CovidChildComponent implements OnInit {


  constructor(private router:Router) {

  }


  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
  }

}
