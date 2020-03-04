import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PlanComponent } from './plan/plan.component';
import {FormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'plan', component: PlanComponent},
    {path: 'sign_up', component: SignUpComponent},
    {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlanComponent,
    SignUpComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, 
      {enableTracing: true}
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
