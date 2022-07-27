import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { countries } from '../countries';
import { countryData } from '../countryData';
import { UserService } from '../user.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  dataa : countries[]= [];
  data2 : countryData[]= [];
  displayedColumns: string[] = ['ID', 'Country', 'Confirmed', 'Deaths', 'Recovered', 'Active'];

  constructor(private router : Router,
    private user : UserService) { }

  ngOnInit(): void {
    this.user.getCountries().subscribe(data=>{
      console.log(data)
      this.dataa = data
    })
    this.user.getData().subscribe(res=>{
      console.log(res)
      this.data2 = res
    })
  }

 logout(){
  this.router.navigateByUrl('login')
 }

}
