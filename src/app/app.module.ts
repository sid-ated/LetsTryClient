import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { KycverificationComponent } from './kycverification/kycverification.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { LandingComponent } from './landing/landing.component';
import { GetauserComponent } from './getauser/getauser.component';
import { UserqueryComponent } from './userquery/userquery.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path:"register", component: RegisteruserComponent},
  { path:"kycverification", component: KycverificationComponent},
  { path:"", component: LandingComponent},
  { path:"user", component: GetauserComponent},
  { path:"queryUser/:id/:method", component:UserqueryComponent},
  { path:"queryUser/:FirstName/:LastName/:method", component:UserqueryComponent},
  { path:"**", component:PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    KycverificationComponent,
    RegisteruserComponent,
    LandingComponent,
    GetauserComponent,
    UserqueryComponent,
    PagenotfoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    PanelModule,
    CardModule,
    InputTextModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
