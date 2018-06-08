import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA41nwLzYkUkylzQAfFh2CvGfxQ4wBZRTc",
  authDomain: "ionic-firebase-df5d6.firebaseapp.com",
  databaseURL: "https://ionic-firebase-df5d6.firebaseio.com",
  projectId: "ionic-firebase-df5d6",
  storageBucket: "",
  messagingSenderId: "1076636659569"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  

  rootPage: any = "WelcomePage";
  //rootPage: any = HomePage;
  name:any;

  pages: Array<{title: string, component: any,icon:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.name = localStorage.getItem("name");

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage,icon:"assets/imgs/home.png" },
      { title: 'Suggestion', component: 'SuggestionPage',icon:"assets/imgs/chat.png" },
      { title: 'Share', component: '' ,icon:"assets/imgs/share.png"},
      // { title: 'Verification Address', component: 'VerificationaddressPage',icon:"assets/imgs/exit.png" },
      { title: 'Signout', component: 'Logout',icon:"assets/imgs/exit.png" },
      {title: 'Feedback', component:'FeedbackPage',icon:"assets/imgs/exit.png"}
    ];

  }

  

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      
     
    });
    firebase.initializeApp(config);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    if(page.component == 'Logout'){
      localStorage.clear();
      this.nav.setRoot('WelcomePage');
  }else{
    
    this.nav.setRoot(page.component);
  }
}
}
