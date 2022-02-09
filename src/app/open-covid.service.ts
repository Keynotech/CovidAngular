import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //Http client potrzebne do połączenia po environments
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL= "https://covid-19-data.p.rapidapi.com/";
 const API_KEY= "0eaf85e90emsh909fe7c567d4f04p10bad1jsne26460938022";
const API_HOST= "covid-19-data.p.rapidapi.com";


@Injectable({
 providedIn: 'root'
})
export class OpenCovidService {

 constructor(
 private http: HttpClient
 ) { }

 getCovid(location: any, date:any): Observable<any> {
  console.log("data ->",date)
  console.log("location ->",location)

  return this.http.get(`https://covid-19-data.p.rapidapi.com/report/country/name?name=${location}&date=${date}`, {
   headers: {
		"x-rapidapi-host": API_HOST,
		"x-rapidapi-key": API_KEY
	 }
  });
 }
 getDefaultCovid(location: any): Observable<any> {

  console.log("code ->", location)
  return this.http.get(`https://covid-19-data.p.rapidapi.com/country/code?code=${location}`, {
   headers: {
		"x-rapidapi-host": API_HOST,
		"x-rapidapi-key": API_KEY
	 }
  });

 }
}
