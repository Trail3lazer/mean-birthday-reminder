import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaperComponent } from './paper/paper.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { SpaComponent } from './spa/spa.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../_services';
import { SignupComponent } from './signup/signup.component'


@NgModule({
    // declarations, imports, etc.
  providers: [
    AuthService
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    PaperComponent,
    FormComponent,
    TableComponent,
    SpaComponent,
    LoginComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
