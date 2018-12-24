import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { NotificationsComponent } from './notifications/notifications.component';
import { notificationService } from './shared/notification.service';
import { myfireService } from './shared/myfire.service';
import { UserService } from './shared/user.service';
import { AllpostsComponent } from './allposts/allposts.component';
import { RouteGuard } from './route-guard';
import { AddpostComponent } from './addpost/addpost.component';
import { PostComponent } from './shared/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    HeaderComponent,
    HomeComponent,
    NotificationsComponent,
    AllpostsComponent,
    AddpostComponent,
    PostComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PasswordStrengthBarModule

  ],
  providers: [ RouteGuard ,  notificationService , myfireService , UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
