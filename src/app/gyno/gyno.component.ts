import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-gyno',
  templateUrl: './gyno.component.html',
  styleUrls: ['./gyno.component.scss']
})
export class GynoComponent implements OnInit {
  info:any;

  constructor(private db:AngularFirestore) {
    this.db.collection('Gyno').snapshotChanges().subscribe(res=>{this.info=res});
    console.log(this.info);
 }
 
  ngOnInit(): void {
  
  }

}
