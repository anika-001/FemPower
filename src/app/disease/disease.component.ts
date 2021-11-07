import { Component, OnInit } from '@angular/core';
import { diseases } from '../JsonData/diseases';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.scss']
})
export class DiseaseComponent implements OnInit {
  info:any;
  info1:any;
  

  constructor(private db:AngularFirestore) {
this.db.collection('Disease').snapshotChanges()
.subscribe(res=>{this.info1=res});
    //console.log(this.info1);
    
   
   }

  ngOnInit(): void {
      this.info=diseases;
     // console.log(this.info);
      //console.log(this.info);
    }
  }

