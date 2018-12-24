import { Component, OnInit } from '@angular/core';
import { notificationService } from '../shared/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  type : string = null;
  message:string = null;
  constructor(private notifier:notificationService) {
    notifier.emmiter.subscribe(data=>{
      this.type =data.type;
      this.message = data.message;
      this.reset()
    })
   }

   reset(){
     setTimeout(()=>{
       this.type = null;
       this.message = null;
     },5000);
   };
  
  ngOnInit() {
  }

}
