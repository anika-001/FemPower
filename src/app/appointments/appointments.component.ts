import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

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
