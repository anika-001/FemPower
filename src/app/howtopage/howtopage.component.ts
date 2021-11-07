import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-howtopage',
  templateUrl: './howtopage.component.html',
  styleUrls: ['./howtopage.component.scss']
})

export class HowtopageComponent implements OnInit {
  // public safeUrl: any;
  safeUrl;
  safeUrls = [];
  videos: any;
  constructor(private _sanitizer: DomSanitizer, private db: AngularFirestore) {
    // let url ='https://www.youtube.com/embed/2UqTUZ8pquo';
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/2UqTUZ8pquo");
  }

  getvideos() {
    this.db.collection("Videos").snapshotChanges().subscribe((res: any) => {
      // this.videos = res;
      for (let x of res) {
        this.safeUrls.push(this._sanitizer.bypassSecurityTrustResourceUrl(x.payload.doc.data().link));
        // x.payload.doc.data().link = this._sanitizer.bypassSecurityTrustResourceUrl(x.payload.doc.data().link);
      }
      this.videos = res;
      // console.log(this.safeUrls);
    })
  }

  ngOnInit(): void {
    this.getvideos();
    // this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=2UqTUZ8pquo');
    // this.safeUrl = "https://www.youtube.com/embed/2UqTUZ8pquo";
  }

}
