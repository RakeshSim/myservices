import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/component/displayServices/user-service.service'
import { ProvidedService } from 'src/app/component/ProvidedServices/provided-service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  selectedValue: string = '';
  selectedRadioValue: string = '';
  providedService: any = [];
   private i : number = 0;
  constructor(private userServiceService: UserServiceService) { }

  ngOnInit(): void {

  }
  form = new FormGroup({
    gender: new FormControl('', Validators.required)
  });


  changeGender(e) {
    console.log(e.target.value);
    this.selectedRadioValue = e.target.value;
   

  }

  selectChangeHandler(event: any) {
    this.userServiceService.findAll().subscribe(response => {
      this.providedService = response;
      console.log(response);
    }), (error => {
      console.log(error);
    });

    //update the ui

  }  

}
