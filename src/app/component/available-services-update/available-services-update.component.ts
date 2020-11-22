import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/component/displayServices/user-service.service'
import { Registration } from 'src/app/component/registration/registration';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-available-services-update',
  templateUrl: './available-services-update.component.html',
  styleUrls: ['./available-services-update.component.css']
})
export class AvailableServicesUpdateComponent implements OnInit {

  id:number;
  name : string;
  resistration : any ;
  submitted = false;
  services = [
    { id: 'rom', name: 'Room Shifting' },
    { id: 'cln', name: 'Cleaning Services' },
    { id: 'hom', name: 'Home Delivery' },
    { id: 'pnt', name: 'Painting' }
  ];

  constructor(private userServiceService: UserServiceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.resistration =  new Registration();
    this.name = this.route.snapshot.params['name'];
console.log("onit namr"+name);
    this.userServiceService.getAllServicesByname(this.name).subscribe(response => {
      this.resistration = response;
      console.log(response);
    }), (error => {
      console.log(error);
    });
  }

  updateRegistration(name:string){
    console.log(this.resistration);
    var myRequest = JSON.stringify(this.resistration);
    this.userServiceService.updateServices(name,(JSON.parse(myRequest)).subscribe((res) => {
      console.log(res);
      this.submitted = true;
      this.gotoList();
    }, (error) => {
      console.log(error);
    }));

  }
  gotoList() {
    this.router.navigate(['/list-register-services-cmp']);
  }
}
