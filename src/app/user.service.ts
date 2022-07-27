import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { countries } from './countries';
import { countryData } from './countryData';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http : HttpClient) { }
  url : string= "https://api.covid19api.com/countries";

  getCountries(){
  
    return this.http.get<countries[]>(this.url);
  }

  getData(){
    let url = "https://api.covid19api.com/country/south-africa?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z"
    return this.http.get<countryData[]>(url)
  }
}
