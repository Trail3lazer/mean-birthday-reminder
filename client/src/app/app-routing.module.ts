import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaComponent } from './spa/spa.component';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'

const routes: Routes = [
  { path: '', component: SpaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'yourList', component: SpaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
