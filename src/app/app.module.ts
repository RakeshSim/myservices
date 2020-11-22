import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemComponent } from './component/item/item.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AvailableServicesComponent } from './component/available-services/available-services.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { RouterModule } from '@angular/router';
// import { UserServiceService } from './component/displayServices/user-service.service'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListregistereduserComponent } from './component/listregistereduser/listregistereduser.component';
import { AvailableServicesUpdateComponent } from './component/available-services-update/available-services-update.component';

@NgModule({
  declarations: [
    AppComponent,

    ItemComponent,

    FooterComponent,

    RegistrationComponent,

    AvailableServicesComponent,

    HomeComponentComponent,

    ListregistereduserComponent,

    AvailableServicesUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'home-cmp',
        component: HomeComponentComponent

      },
      {
        path: 'registry-cmp',
        component: RegistrationComponent
      },
      {
        path: 'app-available-services',
        component: AvailableServicesComponent
      },
      {
        path: 'list-register-services-cmp',
        component: ListregistereduserComponent
      },
      {
        path: 'update-register-services-cmp/:name ',
        component: AvailableServicesUpdateComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
