import { Component, OnInit ,NgZone, ChangeDetectorRef} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ExternalLibraryService } from '../utils';
declare let Razorpay: any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private as: AuthService, private router: Router, private db: AngularFirestore, private zone: NgZone,private cd: ChangeDetectorRef,  private razorpayService: ExternalLibraryService) { }
  response: any;
  
  razorpayResponse: any;
  showModal = false;
    items: any;
  total: number = 0;
  subtotal: number = 100;
  shipping: number = 100;
  ngOnInit(): void {

    this.as.getUserState().subscribe(user => {
      if(user == null) this.router.navigate(['/signin']);
      this.getcart(user)
      ;
      this.as.getprofile(user.uid).subscribe((profile:any)=>{
        this.RAZORPAY_OPTIONS.prefill.email = user.email;
          this.RAZORPAY_OPTIONS.prefill.contact = profile.payload.data().phone;
          this.RAZORPAY_OPTIONS.prefill.name = profile.payload.data().name;

      })
    })
    this.razorpayService
      .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
      .subscribe();

  }
  RAZORPAY_OPTIONS = {
    "key": "rzp_test_YK8zTwgKh5jXsx",
    "amount": "10000",
    "name": "fempower",
    "order_id": "",
    "description": "",
    "image": "https://firebasestorage.googleapis.com/v0/b/fempower-883da.appspot.com/o/logo.png?alt=media&token=94c41630-000a-4467-9a29-4138f02eb2da",
    "prefill": {
      "name": "Test Name",
      "email": "Test email",
      "contact": "Test number",
      "method": ""
    },
    "handler": {},
    "modal": {},
    "theme": {
      "color": "#3c8d93"
    }
  };

  public proceed() {
    this.RAZORPAY_OPTIONS.amount = ((this.total + 100)*100) + '';
    this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);

    let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
    razorpay.open();
  }

  public razorPaySuccessHandler(response: any) {
    console.log(response);
    this.razorpayResponse = `Successful Transaction`;
    console.log(this.razorpayResponse);
    this.router.navigate(['/home']);

    this.zone.run(() => {
      this.router.navigateByUrl("/orders");
    });

  }


  getcart(usercred){
    this.db.collection("Cart").doc(usercred.uid).collection("items").snapshotChanges().subscribe(res => {
      this.items = res;
      for(let x of this.items){
        this.db.collection("Products").doc(x.payload.doc.data().productid).snapshotChanges().subscribe((res: any) => {
          x["quantity"] = x.payload.doc.data().quantity;
          x["img"] = res.payload.data().img;
          x["namee"] = res.payload.data().name;
          x["soldby"] = res.payload.data().soldby;
          x["price"] = res.payload.data().price;
          this.total += x["price"]
          this.subtotal += this.total;
        })
      }
      console.log(this.items)
    })
  }

}
