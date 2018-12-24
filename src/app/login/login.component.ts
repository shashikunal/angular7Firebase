import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { notificationService } from '../shared/notification.service';
import { myfireService } from '../shared/myfire.service';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
     private notifier:notificationService ,
     private myFire:myfireService , 
     private userService:UserService,
     private router:Router
     ) { }


  submit(form:NgForm){
    const username = form.value.username;
    const password = form.value.password;
    firebase.auth().signInWithEmailAndPassword(username , password).then(userData =>{
      if(userData.user.emailVerified){
       return this.myFire.getUserFromDatabase(userData.user.uid);
        console.log('next');
      }else {
        const message = `Your email is not yet verified`;
        this.notifier.display('error' , message);
        firebase.auth().signOut();
      }
    }).then(getdataFromDatabase =>{
      if(getdataFromDatabase){
        this.userService.set(getdataFromDatabase);
        this.router.navigate(['/allposts']);
        console.log(getdataFromDatabase)
      };
    }).catch(err=>{
      console.log(err);
      this.notifier.display('error' , err.message);
    });
  }

  ngOnInit() {
  }

}
