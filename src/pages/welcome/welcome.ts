import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { HomePage } from '..//home/home';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import * as firebase from 'Firebase';
import { Device } from '@ionic-native/device';
//import { FirebaseListObservable } from 'angularfire2/database-deprecated';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  rooms = [];
 
 UUID:any;

  //shoppingItems: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private fb: Facebook,
    private googlePlus: GooglePlus,
    public platform: Platform,
    public firebaseProvider: FirebaseProvider,
    private device: Device) {
     // this.shoppingItems =this.firebaseProvider.getShoppingItems();
     // console.log(this.shoppingItems)

    // console.log('Device UUID is: ' + this.device.uuid);

    // this.UUID = this.device.uuid;
    
    //  var ref = firebase.database().ref('/favorite_locations/{1hsKE3BFDGfTKomZv0yHbmZT8oy1}/1hsKE3BFDGfTKomZv0yHbmZT8oy1');
    //  ref.on('value', resp => {
    // //  this.rooms = [];
    //  // this.rooms =resp;

    //    //console.log(resp);
    //    //this.rooms = [];
    //    this.rooms = snapshotToArray(resp);
    //    console.log(this.rooms);
    // });
     
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    
  }

  fnLogin(){
    this.navCtrl.setRoot('MobilenumberPage');
  }

  userdata:any;
  fnFacebookLogin(){
    this.fb.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.fb.api('me?fields=id,name,email,first_name,last_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {

          console.log(JSON.stringify(profile));

          this.navCtrl.setRoot('MobilenumberPage',{
            name: profile['first_name']
          });
      });
    },(error)=>{
     // alert(JSON.stringify(error));
    }
    );
  }

  responseData1:any;
  responseData:any;
  fnGooglePlusLogin(){
    var webClientId;
    if(this.platform.is('android')){
      webClientId = '97573489828-1c0pe1l2r4dj4equbvv1fefiiajqvd88.apps.googleusercontent.com';
    }else{
      webClientId = '97573489828-1c0pe1l2r4dj4equbvv1fefiiajqvd88.apps.googleusercontent.com'
    }

   
    this.googlePlus.login({
      'webClientId':webClientId,
      'offline': true
    })
  .then(res => {
    this.responseData = res;
    console.log(JSON.stringify(this.responseData));
    this.navCtrl.setRoot('MobilenumberPage',{
      name:this.responseData.givenName
      
    });

  
  })
  .catch(err => {
    console.log("error"+err);
  });
  }

}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};