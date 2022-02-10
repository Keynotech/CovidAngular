import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { products } from './products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
  constructor(
    private router:Router
  ) { }

  goToPage(pageName:string):void{
    this.router.navigate(['${pageName']);
  }
  
  
  ngOnInit(): void {
  }
  products = products;
 share() {
 window.alert('Produkt został udostępniony!');
  }

}


