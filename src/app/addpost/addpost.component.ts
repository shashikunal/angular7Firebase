import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import { myfireService } from '../shared/myfire.service';
import { notificationService } from '../shared/notification.service';
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit  , OnDestroy{
personalPostsRef : any;
postLists:any[] = [];

constructor(private myFire:myfireService , private notifier:notificationService) { }

onFileSelection(event){
  const fileList: FileList = event.target.files;
  if(fileList.length > 0){
    const file:File = fileList[0];
    this.myFire.uploadFile(file).then(data=>{
      this.notifier.display("success" , 'Picture Successfully Uploaded');
      return  this.myFire.handleImageUpload(data);
      console.log(data['fileUrl']);
    }).catch(err =>{
      this.notifier.display('error' , err.message);
      console.log(err);
    });
  }
}



  ngOnInit() {
    const uid = firebase.auth().currentUser.uid;
    this.personalPostsRef = this.myFire.getUserPostsRef(uid);
    this.personalPostsRef.on('child_added' , data=>{
      this.postLists.push({
        key:data.key,
        data:data.val()
      });
    });

  } //oninit

  ngOnDestroy(): void {
   this.personalPostsRef.off();
    
  }
}
