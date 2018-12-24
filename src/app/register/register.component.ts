import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { notificationService } from '../shared/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private notifier:notificationService) { 

  }

  public account = {
    password: <string>null
  };
  public barLabel: string = "Password strength:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853']

  submit(form:NgForm){
    const username = form.value.username;
    const email = form.value.email;
    const phonenumber = form.value.phonenumber;
    const password = form.value.password;
    
//firebase
    firebase.auth().createUserWithEmailAndPassword(email , password).then((userData)=>{
      console.log(userData);
        userData.user.sendEmailVerification();
        const message = `
        A Verification email has been sent to ${email} 
        kindly please check your inbox and follow the steps in the verification email.
        once verification complete please login
        `
        this.notifier.display('success' , message)
        return firebase.database().ref('users/' + userData.user.uid).set({
          email:email,
          uid:userData.user.uid,
          name:username,
          phonenumber:phonenumber

        }).then(()=>{
          console.log("hello");
          firebase.auth().signOut();
        })
    }).catch((err)=>{
      console.log(err)
      this.notifier.display('error' , err.message);
    })
  };
  //end of firebase;




  ngOnInit() {
  }

}
