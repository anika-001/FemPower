import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {
  
  constructor(private db:AngularFirestore) { 
   
    
  }

  data:any;
  getdata(){
    this.db.collection('Art').snapshotChanges().subscribe(res=>{this.data=res});
  }

  ngOnInit(): void {
    this.getdata();
  }

}
