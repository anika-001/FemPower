import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-ngos',
  templateUrl: './ngos.component.html',
  styleUrls: ['./ngos.component.scss']
})
export class NgosComponent implements OnInit {

  constructor(private db: AngularFirestore) { }
  NGOs: any;

  getngodata(){
    this.db.collection("Users", ref => ref.where("role", "==", "NGO")).snapshotChanges().subscribe(res => {
      this.NGOs = res;
    })
  }

  ngOnInit(): void {
    this.getngodata();
  }

}
