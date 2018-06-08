import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  rateWaitingTime = "1";
  rateDriver = "1";
  rateCar = "1";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  onModelChange(event){

  }

  onrateCar(event){
    console.log(event);
  }

  onrateDriver(event){
    console.log(event);
  }

  onrateWaitingTime(event){
    console.log(event);
  }

  fnSendFeedback(){
    console.log(this.rateWaitingTime +""+ this.rateDriver +""+ this.rateCar );
  }

}
