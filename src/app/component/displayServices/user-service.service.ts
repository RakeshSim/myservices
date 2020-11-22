import { Injectable } from '@angular/core';
 import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ProvidedService } from 'src/app/component/ProvidedServices/provided-service';
import {AvailableServicesComponent} from 'src/app/component/available-services/available-services.component';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private usersUrl: string;
  private usersUrl1: string;
  private userSaveUrl: string;
  private getAllServiceUrl:string;
  private deleteUrl:string;
 // provideService: ProvidedService;


  constructor(private httpClient: HttpClient) {
    this.usersUrl = 'http://localhost:8080/services';
    this.usersUrl1='http://localhost:8080/services1';
    this.userSaveUrl='http://localhost:8080/saveservices';
    this.getAllServiceUrl='http://localhost:8080/serviceslist';
    this.deleteUrl='http://localhost:8080/serviceslist';
   }

  //  public save(user: ProvidedService) {
  //   return this.http.post<ProvidedService>(this.usersUrl, user);
  // }

  public findAll() {
    
    console.log('find all');
    return this.httpClient.get(this.usersUrl1);
  }

  public getAllServices() {
    
    console.log('Get all services');
    return this.httpClient.get(this.getAllServiceUrl);
  }

  public getAllServicesByname(name:string) {
    console.log('Get all services');
    return this.httpClient.get('${this.getAllServiceUrl}/${name}');
  }

  public saveService(provideService:ProvidedService) {
    
    console.log('Save service');
    return this.httpClient.post(this.userSaveUrl,provideService);
  }


  public updateServices(username:string,value: any){
    return this.httpClient.put('${this.userSaveUrl}/${username}',value);
  }


  deleteEmployee( name :string) {
    console.log("in delete");
    return this.httpClient.delete(`${this.deleteUrl}/${name}`, { responseType: 'text' });
  }
}
