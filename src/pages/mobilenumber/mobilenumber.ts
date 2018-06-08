import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import * as firebase from 'Firebase';
import { Device } from '@ionic-native/device';
/**
 * Generated class for the MobilenumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mobilenumber',
  templateUrl: 'mobilenumber.html',
})
export class MobilenumberPage {

  name:any;
  number:any;
  UUID:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private toastCtrl: ToastController,
     private device: Device) {
    if(navParams!=null){
      if(this.navParams.get('name'))
      this.name = this.navParams.get('name');
      // if(this.navParams.get('number'))
      // this.number = this.navParams.get('number')
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MobilenumberPage');
  }

  fnVerify(){
    if(this.name == undefined){
      this.presentToast("Name is required");
    }else if(this.number == undefined){
      this.presentToast("Telephone is required");
    }else{

      localStorage.setItem("name",this.name);

      this.UUID = this.device.uuid;
      this.navCtrl.setRoot(HomePage);
      //window.location.reload();
     
    }
   
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
