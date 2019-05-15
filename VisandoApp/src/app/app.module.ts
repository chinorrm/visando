import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
// servicios
import { AuthService } from './services/auth.service';
// componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/share/navbar/navbar.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { MainLayoutComponent } from './componentes/main-layout/main-layout.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
// guard
import { AuthGuard } from './guard/auth.guard';
import { DasboardComponent } from './componentes/dasboard/dasboard.component';
// calendar
import { FullCalendarModule } from '@fullcalendar/angular';
import { UserListComponent } from './componentes/user-list/user-list.component';
import { ControlErrorsComponent } from './componentes/controls/control-errors/control-errors.component';
import { ControlInputComponent } from './componentes/controls/control-input/control-input.component';
import { ControlDatepickerComponent } from './componentes/controls/control-datepicker/control-datepicker.component';
import { ControlDropdownlistComponent } from './componentes/controls/control-dropdownlist/control-dropdownlist.component';
import { AddCustomerComponent } from './componentes/add-customer/add-customer.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    MainLayoutComponent,
    PageNotFoundComponent,
    DasboardComponent,
    UserListComponent,
    ControlErrorsComponent,
    ControlInputComponent,
    ControlDatepickerComponent,
    ControlDropdownlistComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    FullCalendarModule,
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthService, AuthGuard, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
