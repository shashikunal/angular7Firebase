import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AllpostsComponent } from './allposts/allposts.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { RouteGuard } from './route-guard';
import { AddpostComponent } from './addpost/addpost.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'allposts' , component:AllpostsComponent , canActivate:[RouteGuard]},
  {path:'myposts' , component:AddpostComponent , canActivate:[RouteGuard]},
  {path:'**' , component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
