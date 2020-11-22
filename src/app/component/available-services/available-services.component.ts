import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProvidedService } from 'src/app/component/ProvidedServices/provided-service';
import { UserServiceService } from 'src/app/component/displayServices/user-service.service'
import { Registration } from 'src/app/component/registration/registration';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.css']
})
export class AvailableServicesComponent implements OnInit {

  resistration : Registration = new Registration();
  services = [
    { id: 'rom', name: 'Room Shifting' },
    { id: 'cln', name: 'Cleaning Services' },
    { id: 'hom', name: 'Home Delivery' },
    { id: 'pnt', name: 'Painting' }
  ];

  username: string;
  address: string;
  isSubscribedWeek: any;
  isSubscribedWeekend: any;
  providedservices: any[];
  cities: any[];
  states: any[];
  doservice: any[];
  gender: any;
  chargesPerHrs: any;
  experience: any;

  submitted = false;


  constructor(private userServiceService: UserServiceService, private router: Router) { }


  ngOnInit(): void {
  }

  saveService() {

    this.submitted = true;
    let serve = new Registration();
    serve.address = this.address;
    serve.username = this.username;
    serve.chargesPerHrs = this.chargesPerHrs;
    serve.doservice = this.doservice;
    serve.cities = this.cities;
    serve.states = this.states;
    serve.isSubscribedWeek = this.isSubscribedWeek;
    serve.isSubscribedWeekend = this.isSubscribedWeekend;
    serve.gender = this.gender;
    serve.experience = this.experience;

    console.log(serve);
    var myRequest = JSON.stringify(serve);
    this.userServiceService.saveService(JSON.parse(myRequest)).subscribe((res) => {
      console.log(res);
      this.submitted = true;
      this.clearForm();
this.gotoList();
    }, (error) => {
      console.log(error);
    });
     
  }
clearForm(){
  console.log("in clear form");
  this.username="";
  this.address= "";
  this.isSubscribedWeek= "";
  this.isSubscribedWeekend= "";
  
  this.cities= [];
  this.states= [];
  this.doservice= [];
  this.gender= "";
  this.chargesPerHrs= "";
  this.experience= "";


}

gotoList() {
  this.router.navigate(['/list-register-services-cmp']);
}

}
