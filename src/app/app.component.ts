import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit(){

    // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDJmzKjUNjnhpZjt2y2lBgqZ-1tp6OAMsE",
    authDomain: "instagram-4fabb.firebaseapp.com",
    databaseURL: "https://instagram-4fabb.firebaseio.com",
    projectId: "instagram-4fabb",
    storageBucket: "instagram-4fabb.appspot.com",
    messagingSenderId: "835735233886"
  };
  firebase.initializeApp(config);

  } //oninit
}
