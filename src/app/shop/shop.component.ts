import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private db: AngularFirestore, private as: AuthService, private router: Router) { }
  products: any = [];
  user: any = null;
  ngOnInit(): void {
    this.getproducts();
    this.as.getUserState().subscribe(user => {
      if (user == null) { this.user = null }
      else { this.user = user }
    })
  }

  getproducts() {
    this.db.collection("Products").snapshotChanges().subscribe(res => {
      this.products = res;
    })
  }

  addtocart(id) {
    if (this.user != null) {
      this.db.collection("Cart").doc(this.user.uid).collection("items").add({ "productid": id, "quantity": 1 });
      // this.db.collection("Cart").doc(this.user.uid).collection("items").snapshotChanges().subscribe(res => {
      //   for(let x of res){
      //     if(x.payload.doc.data().productid == id){
      //       this.db.collection("Cart").doc(this.user.uid).collection("items").doc(res[0].payload.doc.id).update({ "quantity": 2 });
      //       break;
      //     }
      //     else{
      //       let quan = res[0].payload.doc.data().quantity;
           
      //     } 
      //   }
      // })

    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
