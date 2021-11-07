import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsComponent } from './news/news.component';
import { DiseaseComponent } from './disease/disease.component';
import { CardsComponent } from './cards/cards.component';
import { NgosComponent } from './ngos/ngos.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ForumComponent } from './forum/forum.component';
import { MapsComponent } from './maps/maps.component';
import { ArtComponent } from './art/art.component';
import { HowtopageComponent } from './howtopage/howtopage.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PaymentComponent } from './payment/payment.component';
import { GynoComponent } from './gyno/gyno.component';
import { NewsandblogComponent } from './newsandblog/newsandblog.component';
import { GynacformComponent } from './gynacform/gynacform.component';
import { CommunityComponent } from './community/community.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { EventsComponent } from './events/events.component';
import { AddeventComponent } from './addevent/addevent.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    NavbarComponent,
    NewsComponent,
    DiseaseComponent,
    CardsComponent,
    NgosComponent,
    ShopComponent,
    CartComponent,
    OrdersComponent,
    ForumComponent,
    MapsComponent,
    ArtComponent,
    BlogsComponent,
    PaymentComponent,
    HowtopageComponent,
    BlogsComponent,
    GynoComponent,
    NewsandblogComponent,
    GynacformComponent,
    CommunityComponent,
    DoctorsComponent,
    BookappointmentComponent,
    EventsComponent,
    AddeventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'fempower'),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    MatSelectModule,
    BrowserAnimationsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
