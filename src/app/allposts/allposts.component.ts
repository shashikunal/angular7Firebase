import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import _ from 'lodash'
@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css']
})
export class AllpostsComponent implements OnInit , OnDestroy {
all:any[] = [];
allRef:any;
loadMoreRef:any;
  constructor() { }

  ngOnInit() {
    this.allRef = firebase.database().ref("allposts").limitToFirst(10);
    this.allRef.on('child_added' , data=>{
      this.all.push({
        key:data.key,
        data : data.val()
      });
    });
  }

  onLoadMore(){
    if(this.all.length > 0){
      const lastLoadedPost = _.last(this.all);
      const lastLoadedPostKey = lastLoadedPost.key;
      this.loadMoreRef = firebase.database().ref('allposts').startAt(null , lastLoadedPostKey).limitToFirst(2+1);
      this.loadMoreRef.on('child_added' , data=>{
        if(data.key === lastLoadedPostKey){
          return
        }else {
          this.all.push({
            key:data.key,
            data:data.val()
          })
        }
      })
    }
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.allRef.off();
  }
}
