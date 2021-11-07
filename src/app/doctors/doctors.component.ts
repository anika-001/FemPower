import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  constructor(private db: AngularFirestore) {}
  gynac: any;

  getgynacdata(){
    this.db.collection("Users", ref => ref.where("role", "==", "Gynac")).snapshotChanges().subscribe(res => {
      this.gynac = res;
    })
  }

  ngOnInit(): void {
    this.getgynacdata();
  }
}
