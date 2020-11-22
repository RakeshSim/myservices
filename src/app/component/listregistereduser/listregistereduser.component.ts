import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/component/displayServices/user-service.service'
import { RegisteredUser } from 'src/app/component/listregistereduser/registered-user';
import { Observable } from "rxjs";
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-listregistereduser',
  templateUrl: './listregistereduser.component.html',
  styleUrls: ['./listregistereduser.component.css']
})
export class ListregistereduserComponent implements OnInit {

   resistration :any = [];
  constructor(private userServiceService: UserServiceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }


  reloadData() {
    this.userServiceService.getAllServices().subscribe(response => {
      this.resistration = response;
      console.log(response);
    }), (error => {
      console.log(error);
    });

  }

  deleteServices(name: string) {
    this.userServiceService.deleteEmployee(name)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateService(name: string){
    console.log("name"+name);
    this.router.navigate(['update-register-services-cmp',name]);
  }
}
