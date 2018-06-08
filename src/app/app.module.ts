import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { FirebaseProvider } from '../providers/firebase/firebase';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Device } from '@ionic-native/device';
// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';




// var config = {
//   apiKey: "AIzaSyA41nwLzYkUkylzQAfFh2CvGfxQ4wBZRTc",
//   authDomain: "ionic-firebase-df5d6.firebaseapp.com",
//   databaseURL: "https://ionic-firebase-df5d6.firebaseio.com",
//   projectId: "ionic-firebase-df5d6",
//   storageBucket: "",
//   messagingSenderId: "1076636659569"
// };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Facebook,
    GooglePlus,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
