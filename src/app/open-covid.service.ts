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

 getTotalsCovid(): Observable<object> {

  return this.http.get(`https://covid-19-data.p.rapidapi.com/totals`, {
   headers: {
		"x-rapidapi-host": API_HOST,
		"x-rapidapi-key": API_KEY
	 }
  });
 }
 getDefaultCovid(location: any, date:any): Observable<any> {

  return this.http.get(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global?country=${location}&min_date=${date}T00:00:00.000Z&max_date=${date}T00:00:00.000Z&hide_fields=_id,%20country,%20country_code,%20country_iso2,%20country_iso3,%20loc,%20state%27`, {
  });

 }

 getCountryInformation(location: any): Observable<any> {

  return this.http.get(`https://restcountries.com/v3.1/name/${location}`, {
  });

 }
}
